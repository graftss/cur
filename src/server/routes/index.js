const express = require('express');
const { join } = require('path');

const buildPath = join(__dirname, '../../../build');
const indexHtmlPath = join(buildPath, 'index.html');

module.exports = () => {
  const router = new express.Router();

  router.use(express.static(buildPath));

  router.get('*', (req, res) => {
    res.sendFile(indexHtmlPath);
  })

  return router;
};
