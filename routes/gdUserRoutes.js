const express = require('express');
const {
  getAllGdUsers,
  getAllLocation,
} = require('../controllers/gdUserController');

const router = express.Router(); //need to specify router

router.route('/').get(getAllGdUsers);
router.route('/all-location').get(getAllLocation);

module.exports = router;
