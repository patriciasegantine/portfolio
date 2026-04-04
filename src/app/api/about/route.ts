import { NextResponse } from "next/server";
import { CONTENT_ENDPOINTS } from "@/config/content";
import { fetchExternalContent } from "@/services/content/contentServerService";
import type { AboutContent } from "@/types/about";

export async function GET() {
  try {
    const content = await fetchExternalContent<AboutContent>({
      url: CONTENT_ENDPOINTS.about
    });

    return NextResponse.json(content);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch about content." },
      { status: 502 }
    );
  }
}
