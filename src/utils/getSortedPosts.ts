import type { CollectionEntry } from "astro:content";

export function getSortedPosts(
  posts: CollectionEntry<"blog">[],
): CollectionEntry<"blog">[] {
  return posts
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.pubDate).getTime() -
        new Date(a.data.pubDate).getTime(),
    );
}
