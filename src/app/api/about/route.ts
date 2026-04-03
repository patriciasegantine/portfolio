import { NextResponse } from "next/server";
import { aboutContent } from "@/data/about";
import { AboutContent } from "@/types/about";
import { CONTENT_ENDPOINTS } from "@/config/content";

export async function GET() {
  try {
    const response = await fetch(CONTENT_ENDPOINTS.about, {
      next: { revalidate: 300 }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch external about content.");
    }

    const data = (await response.json()) as AboutContent;
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(aboutContent);
  }
}
