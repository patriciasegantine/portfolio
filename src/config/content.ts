export const CONTENT_REPO_BASE_URL =
  "https://raw.githubusercontent.com/patriciasegantine/portfolio-content/main";

export const CONTENT_ENDPOINTS = {
  about: `${CONTENT_REPO_BASE_URL}/about.json`,
  hero: `${CONTENT_REPO_BASE_URL}/hero.json`
} as const;
