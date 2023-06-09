module.exports = {
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  arrowParens: 'always',
  quoteProps: 'consistent',
  importOrder: [
    '^(__mocks__)(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^(atoms)|^(components)|^(screens)|^(navigation)|^(context)(.*)$',
    '^(assets)|^(config)|^(constants)|^(helpers)|^(themes)|^(hooks)|^(services)|^(state)(.*)$',
    '^(models)(.*)$',
    `^[\.]+`,
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
