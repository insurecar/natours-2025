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

//2) ROUTE HANDLERS

//3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/gd-users', gdUserRouter);

//4) Started SERVER
module.exports = app;
