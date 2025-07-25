import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import { promises as fs } from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import { page_routes } from "./routes-config";
import { visit } from "unist-util-visit";
import matter from "gray-matter";
import { getIconName, hasSupportedExtension } from "./utils";
import { cache } from "react"; // Importar cache desde 'react'
import { unified } from "unified";
import remarkParse from "remark-parse";
import { toString } from "mdast-util-to-string";
// import remarkSlug from "remark-slug" // ¡ELIMINADO! Ya no necesitamos remark-slug aquí

// custom components imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pre from "@/components/markdown/pre";
import Note from "@/components/markdown/note";
import { Stepper, StepperItem } from "@/components/markdown/stepper";
import Image from "@/components/markdown/image";
import Link from "@/components/markdown/link";
import Files from "@/components/markdown/files";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import OutletWrapper from "@/components/markdown/docs-outlet-with-suspense";

// add custom components
const components = {
  OutletWrapper,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  pre: Pre,
  Note,
  Stepper,
  StepperItem,
  img: Image,
  a: Link,
  Files,
  table: Table,
  thead: TableHeader,
  th: TableHead,
  tr: TableRow,
  tbody: TableBody,
  t: TableCell,
};

// Tipos para los datos procesados de MDX
export type BaseMdxFrontmatter = {
  title: string;
  description: string;
};

export type Heading = {
  level: number;
  text: string;
  href: string;
};

export type ProcessedMdx = {
  compiledMdx: Awaited<ReturnType<typeof compileMDX<BaseMdxFrontmatter>>>;
  frontmatter: BaseMdxFrontmatter;
  headings: Heading[];
};

// Nueva función para extraer encabezados de forma ligera
async function extractHeadingsFromMdx(rawMdx: string): Promise<Heading[]> {
  const { content } = matter(rawMdx); // Obtener solo el contenido sin el frontmatter

  const headings: Heading[] = [];
  // Usamos un pipeline de unified ligero solo para parsear
  // No necesitamos remark-slug aquí, ya que generaremos el slug manualmente con sluggify
  const tree = unified().use(remarkParse).parse(content);

  visit(tree, "heading", (node) => {
    const level = node.depth;
    const text = toString(node);
    const id = sluggify(text); // Generar el slug usando nuestra función sluggify

    headings.push({
      level,
      text,
      href: `#${id}`,
    });
  });

  return headings;
}

// Función centralizada y cacheada para procesar MDX
const getProcessedMdx = cache(
  async (contentPath: string): Promise<ProcessedMdx> => {
    const rawMdx = await fs.readFile(contentPath, "utf-8");

    // Extraer encabezados por separado (operación ligera)
    const headings = await extractHeadingsFromMdx(rawMdx);

    // Compilar MDX (operación pesada, pero ahora cacheada)
    const compiledMdx = await compileMDX<BaseMdxFrontmatter>({
      source: rawMdx,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            preProcess,
            rehypeCodeTitles,
            rehypeCodeTitlesWithLogo,
            rehypePrism,
            rehypeSlug, // Mantener este para que los IDs se añadan al HTML renderizado
            rehypeAutolinkHeadings,
            postProcess,
          ],
          remarkPlugins: [remarkGfm], // remarkSlug ya no es necesario aquí tampoco
        },
      },
      components,
    });

    return {
      compiledMdx,
      frontmatter: compiledMdx.frontmatter,
      headings,
    };
  },
);

// Lógica para docs
export async function getCompiledDocsForSlug(slug: string, name: string) {
  try {
    const contentPath = getDocsContentPath(slug, name);
    const { compiledMdx } = await getProcessedMdx(contentPath);
    return compiledMdx;
  } catch (err) {
    console.error("Error compiling docs for slug:", err);
    return undefined;
  }
}

export async function getDocsTocs(slug: string, name: string) {
  try {
    const contentPath = getDocsContentPath(slug, name);
    const { headings } = await getProcessedMdx(contentPath);
    return headings;
  } catch (err) {
    console.error("Error getting docs TOCs:", err);
    return [];
  }
}

export async function getDocFrontmatter(path: string, name: string) {
  try {
    const contentPath = getDocsContentPath(path, name);
    const { frontmatter } = await getProcessedMdx(contentPath);
    return frontmatter;
  } catch (err) {
    console.error("Error getting doc frontmatter:", err);
    return undefined;
  }
}

export function getPreviousNext(path: string) {
  const index = page_routes.findIndex(({ href }) => href == `/${path}`);
  return {
    prev: page_routes[index - 1],
    next: page_routes[index + 1],
  };
}

function sluggify(text: string) {
  const slug = text.toLowerCase().replace(/\s+/g, "-");
  return slug.replace(/[^a-z0-9-]/g, "");
}

function getDocsContentPath(slug: string, name: string) {
  return path.join(process.cwd(), `/contents/${name}/`, `${slug}/index.mdx`);
}

function justGetFrontmatterFromMD<Frontmatter>(rawMd: string): Frontmatter {
  return matter(rawMd).data as Frontmatter;
}

// Utilidad para obtener el nombre del proyecto desde params
export function getProjectNameFromParams(params: { slug: string[] }) {
  return params.slug?.[0] || "";
}

// Utilidad para obtener la ruta del documento desde params
export function getDocPathFromParams(params: { slug: string[] }) {
  const pathParts = params.slug?.slice(1) || [];
  return pathParts.length > 0 ? `/${pathParts.join("/")}` : "";
}

// Utilidad para validar si existe un directorio de documentación
export async function validateDocsPath(
  name: string,
  docPath: string,
): Promise<boolean> {
  try {
    const fullPath = path.join(process.cwd(), "contents", name, docPath);
    await fs.access(fullPath);
    return true;
  } catch {
    return false;
  }
}

// for copying the code in pre
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") return;
      node.raw = codeEl.children?.[0].value;
    }
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties["raw"] = node.raw;
    }
  });
};

export type Author = {
  avatar?: string;
  handle: string;
  username: string;
  handleUrl: string;
};

export type BlogMdxFrontmatter = BaseMdxFrontmatter & {
  date: string;
  authors: Author[];
  cover: string;
};

export async function getAllBlogStaticPaths() {
  try {
    const blogFolder = path.join(process.cwd(), "/contents/blogs/");
    const res = await fs.readdir(blogFolder);
    return res.map((file) => file.split(".")[0]);
  } catch (err) {
    console.error("Error getting all blog static paths:", err);
    return [];
  }
}

export async function getAllBlogsFrontmatter() {
  const blogFolder = path.join(process.cwd(), "/contents/blogs/");
  const files = await fs.readdir(blogFolder);
  const uncheckedRes = await Promise.all(
    files.map(async (file) => {
      if (!file.endsWith(".mdx")) return undefined;
      const filepath = path.join(process.cwd(), `/contents/blogs/${file}`);
      const rawMdx = await fs.readFile(filepath, "utf-8");
      return {
        ...justGetFrontmatterFromMD<BlogMdxFrontmatter>(rawMdx),
        slug: file.split(".")[0],
      };
    }),
  );
  return uncheckedRes.filter((it) => !!it) as (BlogMdxFrontmatter & {
    slug: string;
  })[];
}

export async function getCompiledBlogForSlug(slug: string) {
  const blogFile = path.join(process.cwd(), "/contents/blogs/", `${slug}.mdx`);
  try {
    const rawMdx = await fs.readFile(blogFile, "utf-8");
    return await compileMDX<BlogMdxFrontmatter>({
      source: rawMdx,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            preProcess,
            rehypeCodeTitles,
            rehypeCodeTitlesWithLogo,
            rehypePrism,
            rehypeSlug,
            rehypeAutolinkHeadings,
            postProcess,
          ],
          remarkPlugins: [remarkGfm],
        },
      },
      components,
    });
  } catch (err) {
    console.error("Error compiling blog for slug:", err);
    return undefined;
  }
}

export async function getBlogFrontmatter(slug: string) {
  const blogFile = path.join(process.cwd(), "/contents/blogs/", `${slug}.mdx`);
  try {
    const rawMdx = await fs.readFile(blogFile, "utf-8");
    return justGetFrontmatterFromMD<BlogMdxFrontmatter>(rawMdx);
  } catch (err) {
    console.error("Error getting blog frontmatter:", err);
    return undefined;
  }
}

function rehypeCodeTitlesWithLogo() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (
        node?.tagName === "div" &&
        node?.properties?.className?.includes("rehype-code-title")
      ) {
        const titleTextNode = node.children.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (child: any) => child.type === "text",
        );
        if (!titleTextNode) return;
        // Extract filename and language
        const titleText = titleTextNode.value;
        const match = hasSupportedExtension(titleText);
        if (!match) return;
        const splittedNames = titleText.split(".");
        const ext = splittedNames[splittedNames.length - 1];
        const iconClass = `devicon-${getIconName(ext)}-plain text-[17px]`;
        // Insert icon before title text
        if (iconClass) {
          node.children.unshift({
            type: "element",
            tagName: "i",
            properties: { className: [iconClass, "code-icon"] },
            children: [],
          });
        }
      }
    });
  };
}
