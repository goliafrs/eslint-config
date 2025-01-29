import eslint from '@eslint/js'

import commons from '../commons/index.js'
import rules from '../rules/index.js'

export default {
  ...eslint.configs.recommended,

  name: 'javascript',

  files: commons.files.js,
  ignores: commons.ignores,
  plugins: commons.plugins.js,
  languageOptions: commons.languageOptions,

  settings: {
    ...commons.settings,

    'import/extensions': [ '.js', '.jsx' ],
    'import/parsers': {
      espree: [ '.js', '.jsx' ]
    }
  },

  rules: rules.javascript
}
