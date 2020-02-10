const { Router } = require('express');

const router = Router();

const { getForm, saveForm, resultPage } = require('../controllers/form');

router
  .get('/form', getForm)
  .post('/form', saveForm);
router.get('/result', resultPage);

module.exports = router;