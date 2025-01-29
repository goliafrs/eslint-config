import vueEslintParser from 'vue-eslint-parser'

import commons from '../commons/index.js'
import rules from '../rules/index.js'

export default {
  name: 'vue',

  files: commons.files.all,
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

  rules: rules.vue
}
