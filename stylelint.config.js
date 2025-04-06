module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'scss/dollar-variable-pattern': '^[a-z]([a-z0-9-]+)?$',
    'scss/at-mixin-pattern': '^[a-z]([a-z0-9-]+)?$',
    'scss/at-function-pattern': '^[a-z]([a-z0-9-]+)?$',
    'order/properties-order': [],
    'selector-class-pattern': '^[a-zA-Z][a-zA-Z0-9]*$',
  },
  ignoreFiles: ['node_modules/**'],
};
