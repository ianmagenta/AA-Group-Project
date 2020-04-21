const { port } = require("./config/index");
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const morgan = require('morgan');
const path = require('path');
// const userRoute = require('./routes/user');
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });
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

app.set('view engine', 'pug');
app.use(morgan('dev'));
// app.use('/user', userRoute);
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Define a route.
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/register", (req, res) => {
  res.render("register");
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


module.exports = app;
