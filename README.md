# Chillo Piro Website

This Project is made by Nepabyte
URL:https://nepabyte.com/
(-by Shishir Khanal)

## Project info

**URL**: https://chillopiro.com/

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Project structure

```text
.
|-- index.html          # Vite HTML entry
|-- public/             # Static assets copied as-is
|-- src/                # React application source
|-- vercel.json         # Vercel SPA routing fallback
|-- package.json        # Scripts and dependencies
`-- vite.config.ts      # Vite configuration
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production output is generated in `dist/`.

## Vercel deployment

Use these settings when importing the GitHub repository into Vercel:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

