const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updatedTour,
  deleteTour,
} = require('../controllers/tourController');

const router = express.Router(); //need to specify router

router.route('/').get(getAllTours).post(createTour);
router.route('/:id').get(getTour).patch(updatedTour).delete(deleteTour);

module.exports = router;
