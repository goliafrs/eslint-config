import typescriptEslintParser from '@typescript-eslint/parser'

import commons from '../commons/index.js'
import rules from '../rules/index.js'

export default {
  name: 'typescript',

  files: commons.files.ts,
  ignores: commons.ignores,
  plugins: commons.plugins.ts,

  languageOptions: {
    ...commons.languageOptions,

    parser: typescriptEslintParser,
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: './',
      sourceType: 'module'
    }
  },

  settings: {
    ...commons.settings,

    'import/extensions': [ '.ts', '.tsx' ],
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ]
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json'
      }
    }
  },

  rules: {
    ...rules.javascript,
    ...rules.typescript
  }
}
