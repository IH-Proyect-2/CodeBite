const Pills = require ('../models/Pill');

module.exports = {
  index: (req, res, next) => {
    Pills.find()
    .then (resultPills =>
      res.render('index/index', {
        user: res.locals.user,
        pills: resultPills
      })
    );
  },
};
