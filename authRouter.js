const express = require('express');
const {signup,signin} = require('../controllers/authcontroller');
const router = express.Router();

router.post('/sigup',signup);
router.post('/signin',signin);

module.exports = router;