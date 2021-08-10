const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/test', controller.test);
router.post('/save', controller.save);
router.post('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.get('/get-data', controller.getData);

module.exports = router;