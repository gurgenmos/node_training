const moment = require('moment');

exports.getTime = (req, res, next) => {
  res.json({
    time: moment().format('DD/MM/YYYY hh:mm:ss')
  });
};