const express = require('express');
const morgan = require('morgan'); // need for using middleware to see the time in terminal
const rateLimit = require('express-rate-limit'); // for limiting the same request when you login
const tourRouter = require('./routes/tourRoutes');
const gdUserRouter = require('./routes/gdUserRoutes');
const userRouter = require('./routes/userRoutes');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');

const globalErrorHandler = require('./controllers/errorController');

const app = express();

//1) MIDDLEWARES
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  console.log('🤖🤖🤖🤖🤖🤖');

  app.use(morgan('dev'));
}

const limiter = rateLimit({
  max: 100, //it allows 100 request from the same ip
  windowMs: 60 * 60 * 1000, // per one hour
  message: 'Too many request from this IP, please, try again in one hour!',
});
app.use('/api', limiter); // it will affect only on routes which we specified

app.use(
  express.json({
    limit: '10kb',
  })
); //middleware to get data from client. need it for post method

// Data sanitization NoSQL query injection
app.use(mongoSanitize()); //will not allow to login with "email": {"$gt": ""},

//Data sanitization against XSS
app.use(xss());

app.use(express.static(`${__dirname}/public`)); //need for opening file from public folder

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(req.headers);
  next();
});

//3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/employes', gdUserRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  const err = new Error(`Can't find ${req.originalUrl}`);
  err.status = 'fail';
  err.statusCode = 404;
  next(err);
});

app.use(globalErrorHandler);

//4) Started SERVER
module.exports = app;
