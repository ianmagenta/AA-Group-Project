const { port } = require("./config/index");
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const morgan = require('morgan');
const path = require('path');
const userRoute = require('./routes/user');
const indexRoute = require('./routes/index');
const registerRoute = require('./routes/register');
const { ValidationError } = require("sequelize");
const { environment } = require("./config");

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
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use('/register', registerRoute)
app.use('/users', userRoute);
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
  res.json({
    title: err.title || "Server Error",
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});


app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/signin", (req, res) => {
  res.render("signin");
})

app.get("/newstory", (req, res) => {
  res.render("newstory");
})

app.get("/profile", (req, res) => {
  res.render("profile");
})

app.get("/splash", (req, res) => {
  res.render("splash");
})

app.get("/story", (req, res) => {
  res.render("story");
})


module.exports = app;
