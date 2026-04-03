import { NextResponse } from "next/server";
import { aboutContent } from "@/data/about";
import { CONTENT_ENDPOINTS } from "@/config/content";
import { fetchExternalContentWithFallback } from "@/services/content/contentServerService";
import type { AboutContent } from "@/types/about";

export async function GET() {
  const content = await fetchExternalContentWithFallback<AboutContent>({
    url: CONTENT_ENDPOINTS.about,
    fallback: aboutContent
  });

  return NextResponse.json(content);
}
