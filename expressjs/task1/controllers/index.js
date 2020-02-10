exports.indexPage = (req, res, next) => {
  const time = req.cookies.time ? `<p>${req.cookies.time}</p>` : '';

  res.send(`
    <h1>Hello world</h1>
    ${time} 
  `);
};

exports.paramPage = (req, res, next) => {
  const param = req.params.param;

  let result;

  switch (param) {
    case 'query':
      result = req.query;
      break;
    case 'header':
      result = req.headers;
      break;
    case 'cookie':
      result = req.cookies;
      break;
    default:
      result = 'Unknown param';
  }

  res.send(result);
};