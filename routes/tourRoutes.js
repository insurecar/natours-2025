const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updatedTour,
  deleteTour,
  checkID,
  checkBody,
  aliasTopTours,
  getTourStats,
} = require('../controllers/tourController');

const router = express.Router(); //need to specify router

// router.param('id', checkID); //check specific param

router.route('/tour-stats').get(getTourStats);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/').get(getAllTours).post(checkBody, createTour);
router.route('/:id').get(getTour).patch(updatedTour).delete(deleteTour);

module.exports = router;
