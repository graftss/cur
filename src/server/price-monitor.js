class PriceMonitor {
  constructor({ leagues, updateInterval, getLeaguePrices, onUpdateError }) {
    this.leagues = leagues;
    this.updateInterval = updateInterval;
    this.getLeaguePrices = getLeaguePrices;
    this.currentPrices = {};
    this.lastUpdated = new Date(0);

    this.updateLeaguePrices = this.updateLeaguePrices.bind(this);
    this.updateAllPrices = this.updateAllPrices.bind(this);

    this.updateAllPrices()
      .then(() => setInterval(this.updateAllPrices, updateInterval))
      .catch(onUpdateError);
  }

  updateLeaguePrices(league) {
    return this.getLeaguePrices(league)
      .then(prices => this.currentPrices[league] = prices);
  }

  updateAllPrices() {
    return Promise.all(this.leagues.map(this.updateLeaguePrices))
      .then(() => {
        this.lastUpdated = new Date();
        return this.currentPrices;
      });
  }

  getCurrentPrices() {
    return this.currentPrices;
  }
}

module.exports = PriceMonitor;
