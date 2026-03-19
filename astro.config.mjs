// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ai-dev-blog.pages.dev",
  integrations: [
    mdx(),
    sitemap({
      serialize(item) {
        item.changefreq = "weekly";
        item.priority = item.url.includes("/blog/") && item.url !== "https://ai-dev-blog.pages.dev/blog/" ? 0.8 : 0.5;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
