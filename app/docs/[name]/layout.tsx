import { Leftbar } from "@/components/leftbar";


export default async function DocsLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
params: Promise<{ name: string }>;
}>) {
  return (
    <div className="flex items-start gap-8">
      <Leftbar key="leftbar" />

      <div className="flex-[5.25]">{children}</div>
    </div>
  );
}
