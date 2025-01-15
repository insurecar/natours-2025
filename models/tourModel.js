const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: [true, 'Duplicated name'],
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A Tour mast have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A Tour should have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: [true, 'A Tour must have a description'],
  },
  description: {
    type: String,
    trim: true,
    select: false, //this field will not be sent to the client
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have image cover'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tours', tourSchema);
module.exports = Tour;

// const testTour = new Tour({
//     name: 'The forest hicker tester2',
//     rating: 4.7,
//     price: 497,
//   });

//   testTour
//     .save()
//     .then((doc) => {
//       console.log('🌤️🌤️🌤️', doc);
//     })
//     .catch((err) => console.log('err', err));
