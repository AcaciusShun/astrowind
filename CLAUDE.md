# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **AstroWind** project - a website template built with **Astro 5.0** and **Tailwind CSS**. It's a production-ready static site generator focused on performance, SEO, and modern web practices.

## Development Commands

| Command                  | Purpose                                            |
| ------------------------ | -------------------------------------------------- |
| `npm install`            | Install dependencies                               |
| `npm run dev`            | Start development server at localhost:4321         |
| `npm run build`          | Build production site to ./dist/                   |
| `npm run preview`        | Preview production build locally                   |
| `npm run check`          | Run comprehensive checks (Astro, ESLint, Prettier) |
| `npm run fix`            | Auto-fix ESLint and format with Prettier           |
| `npm run check:astro`    | Run Astro type checking                            |
| `npm run check:eslint`   | Run ESLint linting                                 |
| `npm run check:prettier` | Check Prettier formatting                          |

## Architecture Overview

### Core Configuration

- **Main config**: `src/config.yaml` - Central configuration for site metadata, blog settings, analytics, and UI theme
- **Astro config**: `astro.config.ts` - Build configuration with integrations for Tailwind, MDX, Sitemap, Icons
- **Navigation**: `src/navigation.ts` - Header and footer navigation structure

### Directory Structure

```
src/
├── components/           # Reusable components
│   ├── blog/            # Blog-specific components
│   ├── common/          # Common utilities (Analytics, Meta, etc.)
│   ├── ui/              # UI building blocks
│   └── widgets/         # Page section components
├── content/             # Content collections (Astro Content API)
├── data/post/          # Blog posts (MDX/Markdown)
├── layouts/            # Page layout templates
├── pages/              # File-based routing
├── utils/              # Utility functions
└── assets/             # Static assets (images, styles)
```

### Component Architecture

- **Widgets**: Large page sections (Hero, Features, Footer, etc.)
- **UI Components**: Reusable elements (Button, Headline, Form, etc.)
- **Common Components**: Shared utilities (Analytics, Metadata, Theme Toggle)
- **Blog Components**: Blog-specific functionality (Grid, Pagination, Tags)

### Content Management

- **Blog posts** are stored in `src/data/post/` as MDX/Markdown files
- **Content schema** defined in `src/content/config.ts` with Zod validation
- **Astro Content Collections** for type-safe content handling

### Styling System

- **Tailwind CSS** with custom configuration in `tailwind.config.js`
- **CSS custom properties** for theme colors (primary, secondary, accent)
- **Dark mode** support with `class` strategy
- **Custom styles** in `src/components/CustomStyles.astro`

### Key Features

- **Static site generation** (output: 'static')
- **Blog system** with categories, tags, and related posts
- **SEO optimization** with Open Graph and Twitter cards
- **Image optimization** using Astro Assets and Unpic
- **Icon system** using Astro Icon with Tabler and Flat Color Icons
- **Analytics ready** (Google Analytics, Splitbee support)

### Utility Functions

- **Permalinks**: `src/utils/permalinks.ts` - URL generation
- **Blog utilities**: `src/utils/blog.ts` - Post filtering and sorting
- **Image optimization**: `src/utils/images.ts` - Image processing helpers
- **Frontmatter plugins**: Custom remark/rehype plugins for reading time and responsive tables

## Development Notes

- The site uses **file-based routing** in `src/pages/`
- **Blog functionality** requires `prerender = true` (not fully SSR compatible in current version)
- **Custom integration** in `vendor/integration` extends Astro functionality
- **Type definitions** in `src/types.d.ts` for custom interfaces
- **Environment variables** and site configuration centralized in `src/config.yaml`
