const express = require('express');
const morgan = require('morgan'); // need for using middleware to see the time in terminal
const tourRouter = require('./routes/tourRoutes');
const gdUserRouter = require('./routes/gdUserRoutes');

const app = express();

//1) MIDDDLEWARES
if (process.env.NODE_ENV === 'development') {
  console.log('🤖🤖🤖🤖🤖🤖');

  app.use(morgan('dev'));
}
app.use(express.json()); //middleware to get data from client. need it for post method
app.use(express.static(`${__dirname}/public`)); //need for opening file from public folder

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/employes', gdUserRouter);

app.all('*', (req, res, next) => {
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl}`,
  // });

  const err = new Error(`Can't find ${req.originalUrl}`);
  err.status = 'fail';
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

//4) Started SERVER
module.exports = app;
