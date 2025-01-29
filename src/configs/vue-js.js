import vueEslintParser from 'vue-eslint-parser'

import commons from '../commons/index.js'
import rules from '../rules/index.js'

export default {
  name: 'vue-js',

  files: commons.files.js,
  ignores: commons.ignores,
  plugins: commons.plugins.vue,
  settings: commons.settings,

  languageOptions: {
    parser: vueEslintParser,
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    }
  },

  rules: {
    ...rules.javascript,
    ...rules.vue
  }
}
