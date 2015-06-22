'use strict';
module.exports = serverStatusRoutes;

function serverStatusRoutes(app) {
  app.all('/', function (req, res) {
    res.json(200, {
      status: 'OK',
      body: req.body,
      query: req.query,
      params: req.params,
      method: req.method
    });
  });
}