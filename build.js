import { build } from 'esbuild'

await build({
  entryPoints: [
    'src/index.js',
    'src/configs/index.js',
    'src/configs/javascript.js',
    'src/configs/typescript.js',
    'src/configs/vue.js',
    'src/configs/vue-js.js',
    'src/configs/vue-ts.js',
    'src/rules/index.js',
    'src/rules/javascript.js',
    'src/rules/typescript.js',
    'src/rules/vue.js',
    'src/commons/index.js',
    'src/commons/files.js',
    'src/commons/ignores.js',
    'src/commons/plugins.js',
    'src/commons/settings.js',
    'src/commons/languageOptions.js'
  ],
  outdir: 'dist',
  target: 'esnext',
  format: 'esm',
  minify: true,
  bundle: false,
  sourcemap: false
})
