import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import type { BaseMdxFrontmatter } from "@/lib/markdown";

type Child = BaseMdxFrontmatter & { href: string };

interface OutletProps {
  path: string;
  name: string; // Pasamos el name como prop en lugar de extraerlo del pathname
}

// Server Component - se ejecuta en el servidor
export default async function Outlet({ path: docPath, name }: OutletProps) {
  const children = await getChildrenFromPath(name, docPath);

  if (!children.length) {
    return (
      <div className="grid md:grid-cols-2 gap-5">
        <p>No hay contenido disponible.</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {children.map((child) => (
        <ChildCard {...child} key={child.title} />
      ))}
    </div>
  );
}

function ChildCard({ description, href, title }: Child) {
  return (
    <Link
      href={href}
      className="border rounded-md p-4 no-underline flex flex-col gap-0.5 hover:bg-muted/50 transition-colors"
    >
      <h4 className="!my-0 font-semibold">{title}</h4>
      <p className="text-sm text-muted-foreground !my-0">{description}</p>
    </Link>
  );
}

// Función helper para obtener los archivos (se ejecuta en el servidor)
async function getChildrenFromPath(
  name: string,
  docPath: string,
): Promise<Child[]> {
  try {
    const pathParts = docPath.split("/").filter(Boolean);

    // Construir la ruta completa al directorio
    const fullPath = path.join(process.cwd(), "contents", name, ...pathParts);

    // Verificar si el directorio existe
    try {
      await fs.access(fullPath);
    } catch {
      console.warn(`Directory not found: ${fullPath}`);
      return [];
    }

    // Leer el contenido del directorio
    const entries = await fs.readdir(fullPath, { withFileTypes: true });

    // Filtrar solo directorios (asumiendo que cada sección es un directorio)
    const directories = entries.filter((entry) => entry.isDirectory());

    const children: Child[] = [];

    for (const dir of directories) {
      const indexPath = path.join(fullPath, dir.name, "index.mdx");

      try {
        const raw = await fs.readFile(indexPath, "utf-8");
        const frontmatter = justGetFrontmatterFromMD<BaseMdxFrontmatter>(raw);

        children.push({
          ...frontmatter,
          href: `/docs/${name}${docPath}/${dir.name}`,
        });
      } catch (error) {
        console.warn(`Could not read ${indexPath}:`, error);
        // Continuar con el siguiente directorio si hay error
        continue;
      }
    }

    return children;
  } catch (error) {
    console.error("Error getting children from path:", error);
    return [];
  }
}

// Función helper para extraer frontmatter (debes implementar esta función)
function justGetFrontmatterFromMD<T>(content: string): T {
  // Implementación básica - ajusta según tu parser de frontmatter
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return {} as T;
  }

  const frontmatterString = match[1];
  const frontmatter: any = {};

  // Parser simple de YAML (para casos básicos)
  frontmatterString.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      const value = valueParts.join(":").trim();
      frontmatter[key.trim()] = value;
    }
  });

  return frontmatter as T;
}
