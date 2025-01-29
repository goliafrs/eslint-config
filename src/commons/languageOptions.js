import globals from 'globals'

export default {
  globals: {
    ...globals.node,
    ...globals.browser,
    ...globals.commonjs
  }
}
