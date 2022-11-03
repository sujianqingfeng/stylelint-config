module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-less',
    'stylelint-config-recommended-scss'
  ],
  overrides: [
    {
      'files': ['**/*.vue'],
      'customSyntax': 'postcss-html'
    },
    {
      'files': ['**/*.less'],
      rules: {
        'scss/at-rule-no-unknown': null,
      }
    }
  ],
  rules: {
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', ':deep']
      }
    ]
  },
}