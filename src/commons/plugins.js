import importPlugin from 'eslint-plugin-import'
import unusedImportPlugin from 'eslint-plugin-unused-imports'
import typescriptEslint from 'typescript-eslint'
import vueEslintPlugin from 'eslint-plugin-vue'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticTs from '@stylistic/eslint-plugin-ts'

const js = {
  import: importPlugin,
  'unused-imports': unusedImportPlugin,
  '@stylistic/js': stylisticJs
}
const ts = {
  '@typescript-eslint': typescriptEslint.plugin,
  '@stylistic/ts': stylisticTs
}
const vue = {
  vue: vueEslintPlugin
}

export default {
  js,
  ts: {
    ...js,
    ...ts
  },
  vue: {
    ...js,
    ...ts,
    ...vue
  }
}
