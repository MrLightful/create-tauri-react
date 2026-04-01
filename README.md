# Tauri: An Ultimate Project Template

[![NPM Version](https://img.shields.io/npm/v/create-tauri-react)](https://www.npmjs.com/package/create-tauri-react)
[![NPM Downloads](https://img.shields.io/npm/dm/create-tauri-react)](https://www.npmjs.com/package/create-tauri-react)

This template should help get you started developing with [Tauri](https://tauri.app), [React](https://reactjs.org), [Typescript](https://typescriptlang.org) and [Tailwind CSS](https://tailwindcss.com) (w/ [shadcn/ui](https://ui.shadcn.com/)) in [Vite](https://vitejs.dev).

The architecture is based on practices suggested by [@alan2207](https://github.com/alan2207) in his [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

In addition, this template configures [Biome](https://biomejs.dev/) (via [ultracite](https://github.com/haydenbleasel/ultracite)) for linting and formatting, and [Husky](https://typicode.github.io/husky/) and [Lint-staged](https://github.com/lint-staged/lint-staged) for pre-commits.

![Demo Screenshot](./assets/demo.png)

## Getting Started

### Basics

Ensure that you have the [Tauri prerequisites](https://tauri.app/v1/guides/getting-started/prerequisites) installed.

#### Create a new project

```bash
npx create-tauri-react@latest
```

## What's included

### Core

A basic Tauri setup with Vite, React, Typescript.

#### Tailwind CSS

A basic Tailwind CSS setup. Includes a `components.json` for Shadcn UI components.

### Dev Tools

#### Biome (via ultracite)

[Biome](https://biomejs.dev/) is configured through [ultracite](https://github.com/haydenbleasel/ultracite) for linting and formatting. Run `bun run check` to check and `bun run fix` to auto-fix.

#### Husky + Lint-staged

Pre-commit hooks to run Biome on staged files.

## Using a Different Package Manager

This template uses [bun](https://bun.sh) by default. To use a different package manager (npm, pnpm, yarn, etc.), update the following:

1. **`src-tauri/tauri.conf.json`** — Replace the `beforeDevCommand` and `beforeBuildCommand`:
   ```jsonc
   // For npm/yarn/pnpm:
   "beforeDevCommand": "<pm> run dev",
   "beforeBuildCommand": "<pm> run build",
   ```
2. **`.husky/pre-commit`** — Replace `bunx` with your package manager's equivalent:
   ```sh
   npx lint-staged        # npm
   pnpm dlx lint-staged   # pnpm
   yarn dlx lint-staged   # yarn
   ```
3. **`package.json`** — Update the `lint-staged` command:
   ```jsonc
   "lint-staged": {
     "*.{js,jsx,ts,tsx,json,jsonc,css,scss,md,mdx}": [
       "npx ultracite fix"        // npm
       // "pnpm dlx ultracite fix" // pnpm
       // "yarn dlx ultracite fix" // yarn
     ]
   }
   ```
4. Delete `bun.lock` and run your package manager's install command to generate a new lock file.

## How to use?

Once again, the architecture of the template is based on practices proposed by [@alan2207](https://github.com/alan2207) in his [bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md).

```
src
|
+-- app               # application layer containing:
|   |                 # this folder might differ based on the meta framework used
|   +-- routes        # application routes / can also be pages
|   +-- app.tsx       # main application component
|   +-- provider.tsx  # application provider that wraps the entire application with different global providers - this might also differ based on meta framework used
|   +-- router.tsx    # application router configuration
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- stores            # global state stores
|
+-- testing           # test utilities and mocks
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```

```
src/features/awesome-feature
|
+-- api         # exported API request declarations and api hooks related to a specific feature
|
+-- assets      # assets folder can contain all the static files for a specific feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- stores      # state stores for a specific feature
|
+-- types       # typescript types used within the feature
|
+-- utils       # utility functions for a specific feature
```

So, simply put:

- Define your app's routes in `src/app/router.tsx` and `src/app/routes/*` with minimal business logic.
- The pages from the routes should be using `src/features` to build up functionality on the page.
- The features should be using components from `src/components`, which are pure ui components (like [Shadcn UI](https://ui.shadcn.com/)) or layouts.
- For an extended template, you can look up [`@MrLightful/powersync-tauri`](https://github.com/MrLightful/powersync-tauri), which also defines `src/config` and `src/hooks` examples.
