"use client";

import { ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function DocsMenu({ isSheet = false }: { isSheet?: boolean }) {
  const pathname = usePathname();

  // Extraer `name` desde `/docs/[name]/...`
  const match = pathname.match(/^\/docs\/([^/]+)/);
  const name = match?.[1];

  if (!name) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6 sm:text-base text-[14.5px]">
      {ROUTES.filter((item) => item.name === name).map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/docs/${name}${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}
