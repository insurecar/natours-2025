const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful! 🪿🪿🪿'))
  .catch((err) => console.log('💥💥💥💥', err));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: [true, 'Duplicated name'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

const Tour = mongoose.model('Tours', tourSchema);

const testTour = new Tour({
  name: 'The forest hicker tester2',
  rating: 4.7,
  price: 497,
});

testTour
  .save()
  .then((doc) => {
    console.log('🌤️🌤️🌤️', doc);
  })
  .catch((err) => console.log('err', err));

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});
