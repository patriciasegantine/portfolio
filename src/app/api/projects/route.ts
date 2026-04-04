import { NextResponse } from "next/server";
import { CONTENT_ENDPOINTS } from "@/config/content";
import { fetchExternalContent } from "@/services/content/contentServerService";
import type { Project } from "@/types/project";

export async function GET() {
  try {
    const content = await fetchExternalContent<Project[]>({
      url: CONTENT_ENDPOINTS.projects
    });

    return NextResponse.json(content);
  } catch {
    return NextResponse.json(
      { message: "Failed to fetch projects content." },
      { status: 502 }
    );
  }
}
