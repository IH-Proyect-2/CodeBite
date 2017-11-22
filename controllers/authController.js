const User = require("../models/User");
const passport = require("passport");

module.exports = {
  signupGet: (req, res, next) => { res.render('auth/signup'); },
  signupPost: passport.authenticate('local-signup', {
      successRedirect: '/login',
      failureRedirect: '/signup'
  }),

  loginGet: (req, res, next) => { res.render('auth/login'); },
  loginPost: passport.authenticate('local-login', {
    successRedirect : '/user/profile',
    failureRedirect : '/login'
  }),

  logout: (req, res, next) => { req.logout(); res.redirect('/../'); },

  };
