# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

合理使用task工具创造多个子代理来提高开发的效率,每一个子代理负责一个独立的任务，互不干扰支持并行开发

## Project Overview
Modern React portfolio website with Arknights game-inspired design, featuring multi-language support and smooth animations.

## Key Technologies
- **React 18.2.0** with Vite 4.4.5
- **Styling**: Sass (SCSS) with CSS modules
- **Animation**: Framer Motion 10.18.0
- **i18n**: React-i18next 15.4.0 (EN/中文/日本語)
- **Deployment**: GitHub Pages

## Commands
```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # ESLint check
npm run deploy       # Deploy to GitHub Pages

# Alternative deployment
./deploy.sh          # Manual deployment script
```

## Project Structure
```
src/
├── components/      # Feature-focused components
├── i18n/           # Translation files (en.json, zh.json, ja.json)
├── App.jsx         # Main app component
└── main.jsx        # Entry point
```

## Important Configuration
- **Base URL**: `/Arknights_demo/` (vite.config.js:4)
- **Build Output**: `docs/` directory (vite.config.js:19)
- **Homepage**: `/Arknights_demo/` (package.json:13)
- **Target**: GitHub Pages deployment

## Asset Management
- Images optimized via Vite asset handling
- External assets served from GitHub CDN
- Static files in `public/` duplicated in `docs/` for deployment

## Development Notes
- Pure JavaScript (no TypeScript despite @types dependencies)
- Component-scoped SCSS with global utility classes
- Mobile-first responsive design with custom breakpoints
- Scroll-triggered animations throughout