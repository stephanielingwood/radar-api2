'use strict';
module.exports = routes;

function routes(app) {
  app.all('/', function (req, res) {
    res.json(200, {
      status: 'OK',
      body: req.body,
      query: req.query,
      params: req.params,
      method: req.method
    });
  });

  app.get('/issues', require('./issues.js'));
}