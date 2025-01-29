const js = [ '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs' ]
const ts = [ '**/*.ts', '**/*.tsx' ]

export default {
  js,
  ts,
  all: [ ...js, ...ts ]
}
