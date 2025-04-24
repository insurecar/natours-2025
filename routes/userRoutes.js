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
const {
  getAllUsers,
  updateMe,
  deleteMe,
} = require('./../controllers/userController');

router.post('/signup', signup);
router.post('/login', login);

router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

router.patch('/updateMyPassword', protect, updatePassword);

router.patch('/updateMe', protect, updateMe);
router.delete('/deleteMe', protect, deleteMe);
router.get('/', getAllUsers);

module.exports = router;
