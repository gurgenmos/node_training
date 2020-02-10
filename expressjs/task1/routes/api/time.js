const { Router } = require('express');

const router = Router();

const { getTime } = require('../../controllers/api/time');

router.get('/time', getTime);

module.exports = router;