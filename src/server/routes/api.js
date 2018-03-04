const { Router } = require('express');
const { readFileSync } = require('fs');

const { getStashTabsById } = require('../api/get-stash-tabs');
const { validTabId } = require('../utils');

const readJson = path => Promise.resolve(
  JSON.parse(readFileSync(`${__dirname}/../json/${path}.json`).toString())
);

const respondWithJsonPromise = (promise, res) => (
  promise
    .then(res.json.bind(res))
    .catch(data => res.status(405).end(JSON.stringify(data, null, 2)))
);

const parseTabIds = str => str.split(',').filter(validTabId);

const mockTabResponse = () => readJson('sanitized-stash-tab');

const tabResponse = getStashTabsById;

module.exports = ({ DEFAULT_LEAGUE, priceMonitor }) => {
  const apiRouter = new Router();

  apiRouter.get('/prices', (req, res) => {
    res.json(priceMonitor.getCurrentPrices());
  });

  apiRouter.get('/tabs', (req, res) => {
    const { username, poesessid, tabIds, league: paramLeague } = req.query;
    const league = paramLeague || DEFAULT_LEAGUE;

    console.log(req.query);

    const query = {
      accountName: username,
      league,
      sessionId: poesessid,
      tabIds: Array.isArray(tabIds) ? tabIds : [tabIds],
    };

    // return respondWithJsonPromise(readJson('sanitized-stash-tab'), res);
    return respondWithJsonPromise(
      tabResponse(query).then(res => Object.assign(res, { league })),
      res
    ).catch(a => console.log('woop', a));
  });

  return apiRouter;
};
