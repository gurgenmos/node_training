const moment = require('moment');

module.exports = (req, res, next) => {
  if (req.cookies.time) {
    return next();
  }

  const time = moment().format();

  res.cookie('time', time, {
    expires: new Date(moment().add(1, 'hour')),
    httpOnly: true
  });

  next();
};