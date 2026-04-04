import { NextResponse } from "next/server";
import { CONTENT_ENDPOINTS } from "@/config/content";
import { fetchExternalContent } from "@/services/content/contentServerService";
import type { HeroContent } from "@/types/hero";

export async function GET() {
  try {
    const content = await fetchExternalContent<HeroContent>({
      url: CONTENT_ENDPOINTS.hero
    });

    return NextResponse.json(content);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch hero content." },
      { status: 502 }
    );
  }
}
