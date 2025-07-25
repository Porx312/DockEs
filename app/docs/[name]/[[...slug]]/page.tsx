import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getCompiledDocsForSlug, getDocFrontmatter } from "@/lib/markdown";
import { Typography } from "@/components/typography";

type PageProps = {
  params: Promise<{ slug: string[]; name: string }>;
};

export default async function DocsPage(props: PageProps) {
  const params = await props.params;
  const { slug = [], name } = params;

  const pathName = slug.join("/");
  const res = await getCompiledDocsForSlug(pathName, name);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] py-10 mx-auto">
        <div className="w-full mx-auto">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="sm:text-3xl text-2xl !-mt-0.5">
              {res.frontmatter.title}
            </h1>
            <p className="-mt-4 text-muted-foreground sm:text-[16.5px] text-[14.5px]">
              {res.frontmatter.description}
            </p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} name={name} />
          </Typography>
        </div>
      </div>

      <Toc path={pathName} name={name} />
    </div>
  );
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const { slug = [], name } = params;

  const pathName = slug.join("/");
  const res = await getDocFrontmatter(pathName, name);
  if (!res) return {};
  const { title, description } = res;

  // Construct canonical URL
  const baseUrl = "https://www.docsjs.com/docs";
  const canonicalUrl = [baseUrl, name, ...slug].filter(Boolean).join("/");

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    slug: item.href.split("/").slice(1),
  }));
}
