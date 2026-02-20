import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getSortedPosts } from "../utils/getSortedPosts";
import { getSlug } from "../utils/getSlug";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  return rss({
    title: "ai.dev.blog",
    description: "개발과 기술에 대한 생각을 기록하는 블로그",
    site: context.site!,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${getSlug(post.id)}/`,
    })),
  });
}
