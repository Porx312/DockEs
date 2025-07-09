"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { BaseMdxFrontmatter } from "@/lib/markdown";

type Child = BaseMdxFrontmatter & { href: string };

export default function Outlet({ path }: { path: string }) {
  const [children, setChildren] = useState<Child[]>([]);
  const pathname = usePathname();

  const match = pathname.match(/^\/docs\/([^/]+)/);
  const name = match?.[1];
  console.log("Outlet name:", name, "path:", path);
  useEffect(() => {
    if (!name || !path) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/docs/children?name=${name}&path=${path}`);
        if (!res.ok) throw new Error("Failed to fetch children");
        const data = await res.json();
        setChildren(data);
      } catch (err) {
        console.error("Error loading children:", err);
      }
    };

    fetchData();

    return () => {
      setChildren([]); // Clear children on unmount
    };
  }, [name, path]);

  if (!name) return null;

  return (
    <div className="grid md:grid-cols-2 gap-5">
      {children.length === 0 ? (
        <p>Cargando contenido...</p>
      ) : (
        children.map((child) => <ChildCard {...child} key={child.title} />)
      )}
    </div>
  );
}

function ChildCard({ description, href, title }: Child) {
  return (
    <Link
      href={href}
      className="border rounded-md p-4 no-underline flex flex-col gap-0.5"
    >
      <h4 className="!my-0">{title}</h4>
      <p className="text-sm text-muted-foreground !my-0">{description}</p>
    </Link>
  );
}
