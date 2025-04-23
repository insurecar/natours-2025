const express = require('express');
const router = express.Router();
const { signup } = require('./../controllers/authController');
const {
  login,
  resetPassword,
  forgotPassword,
} = require('./../controllers/authController');
const { getAllUsers } = require('./../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword/:token', resetPassword);

router.get('/', getAllUsers);

module.exports = router;
