const express = require('express');
const fs = require('fs');
const cors = require('cors');

const PriceMonitor = require('./price-monitor');
const getMockPrices = require('./api/get-mock-prices');
const getPoeNinjaPrices = require('./api/get-poe-ninja-prices');
const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');

const app = express();

app.use(cors());

const inProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3333;

const CONFIG = {
  DEFAULT_LEAGUE: 'Bestiary',
  LEAGUES: ['Bestiary'],
  PRICES_UPDATE_INTERVAL: 1000 * 60 * 60 * 6,
};

const priceMonitor = new PriceMonitor({
  getLeaguePrices: inProduction ? getPoeNinjaPrices : getMockPrices,
  leagues: CONFIG.LEAGUES,
  onUpdateError: e => console.log('price monitor error: ', e),
  updateInterval: CONFIG.PRICES_UPDATE_INTERVAL,
});

app.use('/api', apiRouter({
  DEFAULT_LEAGUE: CONFIG.DEFAULT_LEAGUE,
  priceMonitor,
}));

app.use('/', indexRouter());

app.listen(PORT, () => console.log(`listening on ${PORT}`));
