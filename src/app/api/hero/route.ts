import { NextResponse } from "next/server";
import { CONTENT_ENDPOINTS } from "@/config/content";
import { heroContent } from "@/data/hero";
import { fetchExternalContentWithFallback } from "@/services/content/contentServerService";
import type { HeroContent } from "@/types/hero";

export async function GET() {
  const content = await fetchExternalContentWithFallback<HeroContent>({
    url: CONTENT_ENDPOINTS.hero,
    fallback: heroContent
  });

  return NextResponse.json(content);
}
