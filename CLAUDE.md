# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Astro-based blog intended for deployment on Cloudflare Pages.

**Repository**: https://github.com/jrkim3888/my_astro_blog.git

## Status

Initialized. Astro 5 + Tailwind CSS v4 + MDX blog with dark mode, RSS, sitemap.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Build static site to `dist/`
- `npm run preview` — Preview built site

## Tech Stack

- Astro 5 (static output)
- Tailwind CSS v4 (Vite plugin, CSS-first config)
- MDX for blog content
- TypeScript (strict)
- Cloudflare Pages deployment (wrangler.jsonc)
- Pretendard font (Korean)

## Structure

- `src/content/blog/` — MDX blog posts (glob loader, Zod schema in `src/content.config.ts`)
- `src/components/` — Astro components (Header, Footer, ThemeToggle, Hero, BlogCard, TagPill)
- `src/layouts/` — BaseLayout (HTML shell) + BlogPostLayout
- `src/pages/` — Routes (index, blog/, about, contact, rss.xml)
- `src/utils/` — readingTime, formatDate, getSortedPosts
- `src/styles/global.css` — Tailwind v4 theme + prose styles + dark mode
