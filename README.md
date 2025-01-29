# @goliafrs/eslint-config

## Description

`@goliafrs/eslint-config` is a customizable ESLint configuration for JavaScript, TypeScript, and Vue projects. It includes a set of well-tested rules and plugins to ensure a consistent code style.

## Installation

You can install this package using any of the popular package managers:

### npm

```sh
npm install --save-dev @goliafrs/eslint-config
```

### pnpm

```sh
pnpm add --save-dev @goliafrs/eslint-config
```

### yarn

```sh
yarn add -D @goliafrs/eslint-config
```

### bun

```sh
bun add -d @goliafrs/eslint-config
```

## Usage

After installation, add the configuration to your ESLint config file:

### `.eslintrc.js`

```js
module.exports = {
  extends: ['@goliafrs/eslint-config']
};
```

### `.eslintrc.json`

```json
{
  "extends": "@goliafrs/eslint-config"
}
```

## Scripts

For convenience, you can add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
