This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Starte

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure 
M5-project/: Root folder of the project containing essential configuration files for the project setup and build process, such as package.json (dependency management), tsconfig.json (TypeScript configuration), next.config.ts (Next.js specific configurations), eslint.config.mjs (linter configuration), postcss.config.mjs (CSS styling configuration), among others.

app/: Main source folder of the Next.js application. Contains all the application logic, pages, global styles, and components.

app/components/: Folder organizing UI components following atomic design principles, facilitating maintenance and reusability.

atoms/: Basic and simple components that serve as the building blocks of the UI, such as buttons, layout blocks, texts, etc. Example: Block.tsx, Main.tsx.
organisms/: Composed components that combine multiple atoms to form larger parts of the UI, such as header (Header.tsx) and footer (Footer.tsx).
templates/: Layout components that structure pages, defining the overall organization and arrangement of components, such as RootLayout.tsx and TemplateHome.tsx.
pages/: Components representing the application pages, composed using templates. Example: PageHome.tsx.
app/globals.css: Global styles file affecting the entire application.
