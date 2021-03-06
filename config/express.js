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
// const config = require('./config');

module.exports = function(app){

  app.set('views', path.join(__dirname, '../views'));
  app.set("view engine", "ejs");
  app.set('layout', 'layout/main-layout');
  app.use(expressLayouts);
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '../public')));

  app.use('/vendor/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));
  app.use('/vendor/materialize', express.static(path.join(__dirname, '../node_modules/materialize-css/dist')));
  app.use('/vendor/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));


  app.use(session({
    secret: 'awesome project bro',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore( { mongooseConnection: mongoose.connection })
  }));
  app.use((req, res, next) => {
    res.locals.user = req.user;
    res.locals.title = 'Code Bites';
    next();
  });
  app.use(passport.initialize());
  app.use(passport.session());

};
