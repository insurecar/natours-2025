const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config.env' });
const Tour = require('./../../models/tourModel');
const GdUserModel = require('./../../models/gdUserModel');

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

//READ JSON FILE
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

const gdUsers = JSON.parse(
  fs.readFileSync(`${__dirname}/gdUsers.json`, 'utf-8')
);

//IMPORT DATA INTO DB
const importDataTours = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded 💚💚💚💚💚');
    process.exit();
  } catch (e) {
    console.log('Something went wrong... 🍓🍓🍓🍓🍓');
  }
};

//DELETE ALL DATA FROM DB
const deleteDataTours = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully loaded 💚💚💚💚💚');
    process.exit();
  } catch (e) {
    console.log('Something went wrong... 🍓🍓🍓');
  }
};

const importDataGdUsers = async () => {
  try {
    await GdUserModel.create(gdUsers);
    console.log('Data successfully loaded 💚💚💚💚💚');
    process.exit();
  } catch (e) {
    console.log('Something went wrong... 🍓🍓🍓🍓🍓');
  }
};

const deleteDataGdUsers = async () => {
  try {
    await GdUserModel.deleteMany();
    process.exit();
  } catch (e) {}
};

if (process.argv[2] === '--import') {
  if (process.argv[3] === '--tours') {
    importDataTours();
  } else if (process.argv[3] === '--gdusers') {
    importDataGdUsers();
  }
} else if (process.argv[2] === '--delete') {
  if (process.argv[3] === '--tours') {
    deleteDataTours();
  } else if (process.argv[3] === '--gdusers') {
    deleteDataGdUsers();
  }
}
