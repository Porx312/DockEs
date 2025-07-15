import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image src="/logos/js.svg" alt="logo" width={100}  height={100} className="w-10 h-10"/>
      <h2 className="text-md font-bold font-code">DocsJs</h2>
    </Link>
  );
}