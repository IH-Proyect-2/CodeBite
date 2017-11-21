const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const config = require('./config');

module.exports = function(app){

  app.set('views', config.rootPath+'views');
  app.set("view engine", "ejs");
  app.set('layout', 'layout/main-layout');
  app.use(expressLayouts);
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(config.rootPath+'public'));

  app.use(session({
    secret: 'awesome project bro',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore( { mongooseConnection: mongoose.connection })
  }));
  app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.title = 'Pills for Javascript';
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());

};
