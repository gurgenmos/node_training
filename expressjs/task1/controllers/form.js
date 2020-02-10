global.formData = [];

exports.getForm = (req, res, next) => {
  res.render('form/form');
};

exports.saveForm = (req, res, next) => {
  global.formData.push(req.body);

  res.redirect('/result');
};

exports.resultPage = (req, res, next) => {
  const formData = global.formData;

  res.render('form/result', {
    formData
  });
};