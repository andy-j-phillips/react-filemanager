module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'scss/dollar-variable-pattern': '^[a-z]([a-z0-9-]+)?$',
    'scss/at-mixin-pattern': '^[a-z]([a-z0-9-]+)?$',
    'scss/at-function-pattern': '^[a-z]([a-z0-9-]+)?$',
    'order/properties-order': [],
  },
  ignoreFiles: ['node_modules/**'],
};
