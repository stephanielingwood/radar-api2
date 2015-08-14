module.exports = info;
var pjson = require('../package.json');

function info(req, res, next) {
  logger.info('Info page');
  res.status(200).json({
    version: pjson.version,
    time: new Date(),
    buildnumber: process.env.BUILDNUM || 'unavailable',
    body: req.body,
    query: req.query,
    params: req.params,
    method: req.method
  });
}
