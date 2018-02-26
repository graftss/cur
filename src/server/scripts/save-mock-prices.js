const { writeFileSync } = require('fs');
const { join } = require('path');

const getPoeNinjaPrices = require('../api/get-poe-ninja-prices');

const filePath = join(__dirname, '../json/sanitized-prices.json');
const write = data => writeFileSync(filePath, JSON.stringify(data, null, 2));

const saveMockPrices = () => (
  getPoeNinjaPrices('Harbinger')
    .then(write)
    .then(() => console.log('saved prices to', filePath))
    .catch(console.log)
);

saveMockPrices();
