const express = require('express');
const router = express.Router();
const { signup } = require('./../controllers/authController');
const { login } = require('./../controllers/authController');
const { getAllUsers } = require('./../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/all', getAllUsers);

module.exports = router;
