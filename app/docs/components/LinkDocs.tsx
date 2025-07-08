"use client";

import Link from "next/link";

export default function LinkDocs({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <nav>
      <Link href={`${href}`}>{name}</Link>
      <LinkDocs href={`/docs/docs/getting-started/introduction`} name="docs" />
      <LinkDocs href={`/docs/zustand/nextjs/introduction`} name="Zustand" />
    </nav>
  );
}
