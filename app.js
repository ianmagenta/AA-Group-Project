const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const morgan = require('morgan');
const path = require('path');

const userRoute = require('./routes/user');
const indexRoute = require('./routes/index');
const registerRoute = require('./routes/register');
const storyRoute = require('./routes/story');
const commentRoute = require('./routes/comment');
const storiesRoute = require('./routes/stories');
const sessionRoute = require('./routes/session');
const profileRoute = require('./routes/profile');

const { ValidationError } = require("sequelize");
const { environment } = require("./config");
const { api } = require('./config');


app.use((req, res, next) => {
  res.locals.api = api;
  next();
});
// const { check, validationResult } = require('express-validator');

// function asyncHandler(routeHandler) {
//   return async (req, res, next) => {
//     try {
//       await routeHandler(req, res, next)
//     }
//     catch (err) {
//       next(err);
//     }
//   }
// }
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');

app.use('/register', registerRoute);
app.use('/stories', storiesRoute);
app.use('/story', storyRoute);
app.use('/comment', commentRoute);
app.use('/user', userRoute);
app.use('/session', sessionRoute)
app.use('/profile', profileRoute);
app.use('/', indexRoute);

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

// Error handlers. (must have all four arguments to communicate to Express that
// this is an error-handling middleware function)

// Process sequelize errors
app.use((err, req, res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
  }
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  console.log(err);
  res.json({
    title: err.title || "Server Error",
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});


module.exports = app;
