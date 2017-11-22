require('dotenv').load();

const app = require('express')();
const indexRoutes = require('./routes/index');
const mongoose = require('mongoose');

require('./config/passport')();
require('./config/express')(app);

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Connected to db: " + process.env.DB_URL);
});

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error/error');
});

module.exports = app;
