const { writeFileSync: write, readFileSync } = require('fs');
const { join } = require('path');
const parseJson = require('parse-json');

const read = path => readFileSync(join(__dirname, path)).toString();
const readJson = path => parseJson(read(path));

const { getStashTabsByIndex, getStashTabsById } = require('./api/get-stash-tabs');
const getPoeNinjaPrices = require('./api/get-poe-ninja-prices');
const appraise = require('./appraise');

const testData = {
  sessionId: '7d37b7fbfd0a0636873eef6470daecfb',
  league: 'harbinger',
  accountName: 'grasss',
  tabIndices: [],
  tabIds: [
    // '6429b65444544d498a24a2baf6a5be98df6662fd9d56a365b5107edbf01c93af',
    // '515b9b6a2be361a395bf4cc236665b9fbf1a63fcd634889782d6f3c50ae6ba89',
    // '81bba92p2f22b84a53df4c1e93f37b2b3bccc344e49a313e95a5368c25612e1ad',
    // 'f20f5ce55c140d44f97bfd9f3ed8e2260e25754d763ae2197ba2fc4d169549fc',
    // "ae391a714207afd4f1edcea0ab996332e8a629942d2cf31e5673dd476ed5972a",
    "4f989644ed79a8041491d09b1123c2104bd524a15d1b758dd4b3c60a96ba125f",
  ],
};

const hmm = () => {
  const tab = JSON.parse(read(join(__dirname, '../json/tab.json')).toString());
  const prices = JSON.parse(read(join(__dirname, '../json/prices.json')).toString());

  const appraisedItems = appraise(prices, [tab, tab]);

  console.log(appraisedItems);
};

const getprices = () => {
  getPoeNinjaPrices('Harbinger')
    .then(data => write(__dirname + '/json/prices.json', JSON.stringify(data, null, 2)))
    .catch(e => console.log(e))
}

const gettabs = () => {
  getStashTabsById(testData)
    .then(res => {
      write('poop.json', JSON.stringify(res, null, 2));
    })
};

const parsetabs = () => {
  const tabs = readJson('./json/stash-tabs.json');
  console.log()
}


// hmm();
// getprices();
gettabs();

