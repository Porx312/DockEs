// app/api/docs/children/route.ts
import { getAllChildsFromUrl } from "@/lib/markdown";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const path = searchParams.get("path");
  const name = searchParams.get("name");

  if (!name || !path) {
    return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
  }

  const output = await getAllChildsFromUrl(`${name}/${path}`);
  return NextResponse.json(output);
}
