/**
 * 파일명 기반 id에서 날짜 접두사(YYYY-MM-DD-)를 제거하여 깔끔한 slug를 반환합니다.
 * 예: "2026-02-20-astro-blog-with-claude-code" → "astro-blog-with-claude-code"
 */
export function getSlug(id: string): string {
  return id.replace(/^\d{4}-\d{2}-\d{2}-/, "");
}
