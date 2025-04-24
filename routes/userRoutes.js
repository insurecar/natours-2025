const express = require('express');
const router = express.Router();
const { signup } = require('./../controllers/authController');
const {
  login,
  resetPassword,
  forgotPassword,
  updatePassword,
  protect,
} = require('./../controllers/authController');
const { getAllUsers } = require('./../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.patch('/updateMyPassword', protect, updatePassword);

router.get('/', getAllUsers);

module.exports = router;
