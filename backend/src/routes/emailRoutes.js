const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailControllers');

router.post('/email', emailController.createEmail);

module.exports = router;