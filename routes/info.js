module.exports = info;
var pjson = require('../package.json');
var fs = require('fs');

function info(req, res, next) {
  var buildnum = 'unavailable';
  logger.info('Info page');
  fs.readFile('./config.txt', 'utf8', function (err, data) {
    if (err)
      console.log(err);
    if (data) buildnum = data.replace('\n','');
    res.status(200).json({
        version: pjson.version,
        time: new Date(),
        buildnumber: buildnum,
        body: req.body,
        query: req.query,
        params: req.params,
        method: req.method
    });
  });
}
