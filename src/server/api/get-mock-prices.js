const { readFileSync } = require('fs');
const { join } = require('path');
const { compose } = require('ramda');

module.exports = compose(
  Promise.resolve.bind(Promise),
  JSON.parse,
  () => readFileSync(join(__dirname, '../json/sanitized-prices.json'))
);
