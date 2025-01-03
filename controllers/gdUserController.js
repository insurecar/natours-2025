const fs = require('fs');

const gdUsers = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/gdUsers.json`)
);

const location = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/allGdLocation.json`)
);

exports.getAllGdUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    gdUsers,
  });
};

exports.getAllLocation = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      location,
    },
  });
};
