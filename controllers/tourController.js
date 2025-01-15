const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};

// exports.checkID = (req, res, next, id) => {
//   const tour = tours.find((item) => +item.id === +id);

//   if (!tour) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Not found',
//     });
//   }

//   req.tour = tour;
//   next();
// };

exports.getAllTours = async (req, res) => {
  try {
    //1) Filtering queries
    const queryObj = structuredClone(req.query);
    const excludedFields = ['page', 'sort', 'limit', 'fields']; //excluded fields for queries
    excludedFields.forEach((el) => delete queryObj[el]);

    //2) Advanced filtering
    const queryStr = JSON.stringify(queryObj);
    const updatedQuery = JSON.parse(
      queryStr.replace(/\b(gte|gt|lte|lt)\b/g, '$$$1')
    );

    //{difficulty: "easy", "duration": {$gte: 5} }
    //{difficulty: "easy", "duration": {gte: 5} }
    //gte, gt, lte, lt

    const tours = await Tour.find(updatedQuery);

    // const tours = await Tour.find()
    //   .where('duration')
    //   .equals('5')
    //   .where('difficulty')
    //   .equals('easy');

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    //Tour.findOne({_id:req.params.id})
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(200).json({
      status: 'success',
      data: {
        tour: req.tour,
      },
    });
  }
};

exports.createTour = async (req, res) => {
  // const newTour = new Tour({})
  // newTour.save()

  try {
    const newTour = await Tour.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updatedTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({
        status: 'fail',
        message: 'Tour not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
