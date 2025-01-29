export default {
  curly: [ 'error', 'all' ],
  'dot-notation': 'error',
  'no-console': [ 'error', { allow: [ 'warn', 'error' ] } ],
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-unused-labels': 'error',
  'no-var': 'error',
  'no-undef': 'error',
  'no-unused-vars': [
    'error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^error'
    }
  ],
  'no-useless-catch': 'off',
  'require-atomic-updates': 'off',
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
      ignoreReadBeforeAssign: true
    }
  ],
  'sort-imports': [
    'error', {
      allowSeparatedGroups: true,
      ignoreDeclarationSort: true,
      memberSyntaxSortOrder: [ 'all', 'single', 'multiple', 'none' ]
    }
  ],

  '@stylistic/js/array-bracket-newline': [ 'error', { multiline: true } ],
  '@stylistic/js/array-bracket-spacing': [ 'error', 'always' ],
  '@stylistic/js/array-element-newline': [ 'error', 'consistent' ],
  '@stylistic/js/arrow-parens': [ 'error', 'as-needed' ],
  '@stylistic/js/arrow-spacing': 'error',
  '@stylistic/js/block-spacing': 'error',
  '@stylistic/js/brace-style': 'error',
  '@stylistic/js/comma-style': [ 'error', 'last' ],
  '@stylistic/js/comma-dangle': [ 'error', 'never' ],
  '@stylistic/js/comma-spacing': [
    'error',
    {
      before: false,
      after: true
    }
  ],
  '@stylistic/js/computed-property-spacing': [ 'error', 'never' ],
  '@stylistic/js/eol-last': [ 'error', 'always' ],
  '@stylistic/js/func-call-spacing': [ 'error', 'never' ],
  '@stylistic/js/function-paren-newline': [ 'error', 'consistent' ],
  '@stylistic/js/function-call-argument-newline': [ 'error', 'consistent' ],
  '@stylistic/js/indent': [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 'first'
    }
  ],
  '@stylistic/js/jsx-quotes': [ 'error', 'prefer-double' ],
  '@stylistic/js/key-spacing': [
    'error', {
      afterColon: true,
      mode: 'strict'
    }
  ],
  '@stylistic/js/keyword-spacing': [
    'error',
    {
      before: true,
      after: true
    }
  ],
  '@stylistic/js/linebreak-style': [ 'error', 'unix' ],
  '@stylistic/js/lines-between-class-members': [ 'error', 'always' ],
  '@stylistic/js/newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 3 } ],
  '@stylistic/js/no-extra-parens': 'error',
  '@stylistic/js/no-extra-semi': 'error',
  '@stylistic/js/no-multi-spaces': 'error',
  '@stylistic/js/no-multiple-empty-lines': [
    'error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1
    }
  ],
  '@stylistic/js/no-trailing-spaces': 'error',
  '@stylistic/js/no-whitespace-before-property': 'error',
  '@stylistic/js/object-curly-spacing': [ 'error', 'always' ],
  '@stylistic/js/object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        consistent: true,
        multiline: true,
        minProperties: 2
      },
      ObjectPattern: {
        consistent: true,
        multiline: true
      },
      ImportDeclaration: {
        consistent: true,
        multiline: true
      },
      ExportDeclaration: {
        consistent: true,
        multiline: true
      }
    }
  ],
  '@stylistic/js/object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: false } ],
  '@stylistic/js/padded-blocks': [ 'error', 'never' ],
  '@stylistic/js/padding-line-between-statements': [
    'error', {
      blankLine: 'always',
      prev: '*',
      next: 'return'
    }
  ],
  '@stylistic/js/quotes': [ 'error', 'single' ],
  '@stylistic/js/quote-props': [ 'error', 'as-needed' ],
  '@stylistic/js/rest-spread-spacing': [ 'error', 'never' ],
  '@stylistic/js/semi': [ 'error', 'never' ],
  '@stylistic/js/semi-spacing': 'error',
  '@stylistic/js/space-before-blocks': 'error',
  '@stylistic/js/space-before-function-paren': [
    'error',
    {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }
  ],
  '@stylistic/js/space-in-parens': [ 'error', 'never' ],
  '@stylistic/js/space-infix-ops': 'error',
  '@stylistic/js/space-unary-ops': 'error',
  '@stylistic/js/spaced-comment': [ 'error', 'always' ],
  '@stylistic/js/template-curly-spacing': [ 'error', 'never' ]
}
