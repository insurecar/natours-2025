module.exports = (err, req, res, next) => {
  console.log(err.stack); //show us a line where is an error

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
