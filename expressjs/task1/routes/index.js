const { Router } = require('express');
const setTime = require('../middleware/setTime');

const router = Router();

const { indexPage, paramPage } = require('../controllers/index');

router.get('/', setTime, indexPage);

router.get('/param/:param', paramPage);

module.exports = router;