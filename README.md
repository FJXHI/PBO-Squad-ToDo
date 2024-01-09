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

# User guide

## About the application

This app is a ToDo manager mainly developed for mobile devices.
It allows the user to add and customize entries and displays them in multiple different ways.

## Views

The application consists of two different views: the focus mode and the overview mode.
While the overview mode provides a way to see all todo-entries in a grid-layout, the main view is the focus mode where only 5 todo-entries are shown, which are the most important ones.

## Functionality

The app provides multiple features which ensure a comprehensive and easy-to-use way to manage tasks.

### Searching

The searchbar located at the top of the screen can be used to search all todo-entries for a specific term.
To reset the search it is possible to clear the searchbar by clicking the 'x'-button. 

### Sorting

It is only possible to enable one sorting at a time.
The app provides a sorting-functionality which allows to sort the entries by the title, its deadline, expenditure or the timestamp the entries were added.
It is also possible to set the sorting to ascending or descending.

### Operations on the entries

The todo-entries can be deleted or marked as completed.
It is possible to swipe the entry to the left to complete it or swipe to the right to delete it.
Another way to complete and delete an entry is to click on it and select the checkmark or the garbage can.
In addition, the selected entry can be edited to manipulate all its attributes by clicking on the pencil.

### Adding and editing an entry

A todo-entry has multiple different attributes.
The one necessary attribute an entry has to have is the title, any other attributes can be added but are optional.
It is possible to set a deadline, an estimated duration for the task, a number of tags and a description.

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
