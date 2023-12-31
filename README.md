![Deploy To Github pages](https://github.com/FJXHI/PBO-Squad-ToDo/actions/workflows/deploy-docs-and-vue.yml/badge.svg)

# PBO-Squad-ToDo

ToDo Manager build with VUE

App:
https://fjxhi.github.io/PBO-Squad-ToDo/

Docs:
https://fjxhi.github.io/PBO-Squad-ToDo/docs/


# Instructions for the project:

## Installation

Clone the repository and install the dependencies using:

```sh
git clone https://github.com/FJXHI/PBO-Squad-ToDo.git
cd PBO-Squad-ToDo
npm install
```


Format is not necessary, but recommended:
```sh
npm run format
```

Start the development server locally:
```sh
npm run dev
```
Or open the server to the local network:
```sh
npm run dev -- --host
```

## Documentation

Documentation is written using Docosaurus. 
Head to `PBO-Docs\docs` to find the documentation files. Add your own markdown files there and start writing. They will apperat in the sidebar automatically.
See [Docusaurus Styling and Layout](https://docusaurus.io/docs/styling-layout) for more information.

```sh
cd PBO-Docs
npm install
```

To start the documentation server locally:
```sh
npm start --dev
```


# VUE

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
