const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

exports.signup = catchAsync(async (req, res, next) => {
  console.log(111);
  const newUser = User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
});
