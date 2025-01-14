const fs = require('fs');
const GdUserModel = require('./../models/gdUserModel');

const location = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/allGdLocation.json`)
);

exports.getAllGdUsers = async (req, res) => {
  try {
    const employes = await GdUserModel.find();
    res.status(200).json({
      status: 'success',
      length: employes.length,
      data: {
        employes,
      },
    });
  } catch (e) {
    res.status(200).json({
      status: 'success',
      message: err,
    });
  }
};

exports.getAllLocation = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      location,
    },
  });
};
