const Pill = require('../models/Pill');
const User = require('../models/User');
const Comment = require('../models/Comment');

module.exports = {
  index: (req, res, next) => {
    Pill.find({}, (err, Pill) => {
      res.render('pills/index', {
        pills: pill,
        user: res.locals.user
      });
    });
  },

  createGet: (req, res, next) => {
    res.render('pills/create');
  },

  createPost: (req, res, next) => {
    console.log(req.body);
    const newPill = new Pill({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      link: `https://www.youtube.com/embed/${req.body.link.split('=')[1]}`,
      language: req.body.language
    });


    newPill.save()
      .then(pill => {
        User.findByIdAndUpdate(req.user._id,
        {$push: { "pills": pill._id}}, {new: true})
        .then(res.redirect("/user/profile"));

      })
      .catch(err => next (err));
    },
  

  // detail: (req, res, next) => {
  //   Pill.findById(req.params.id, (err, pill) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     Pill.find({
  //       PillId: req.params.id
  //     }, (err, comment) => {
  //       res.render('pills/detail', {
  //         title: 'Pills for Development',
  //         pill: pill,
  //         user: res.locals.user,
  //         comment: comment
  //       });
  //     });
  //   });
  // },
  //
  // delete: (req, res, next) => {
  //   Pill.findByIdAndRemove(req.params.id, (err, obj) => {
  //     if (err) {
  //       return next(err);
  //     }
  //   });
  // },


  // detail: (req, res, next) => {
  //   Pill.findById(req.params.id, (err, pill) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     Review.find({
  //       PillId: req.params.id
  //     }, (err, review) => {
  //       res.render('pills/detail', {
  //         title: 'Pills for Development',
  //         pill: pill,
  //         user: res.locals.user,
  //         comment: comment
  //       });
  //     });
  //   });
  // },
  //
  delete: (req, res, next) => {
    Pill.findByIdAndRemove(req.params.id, (err, obj) => {
      if (err) {
        return next(err);
      }
      res.redirect("/user/profile");
    });
  },

  editGet: (req, res, next) => {
    Pill.findById(req.params.id, (err, pill) => {
      if (err) {
        console.log(err);
      }
      res.render('pills/update', {
        title: 'Pills everyday',
        pill: pill
      });
    });
  },

  editPost: (req, res, next) => {
    const updates = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      language: req.body.language
    };

    Pill.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
     res.redirect('/user/profile');
    });
  },



  // requestPost: (req, res, next) => {
  //   if (req.body.requestPill == 'on') {
  //     const updates = {
  //       isGoingToWaitName: res.locals.user.username,
  //       isGoingToWaitId: res.locals.user._id,
  //       isRequest: true
  //     };
  //     Pill.findByIdAndUpdate(req.params.id, updates, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   } else if (!req.body.requestPill) {
  //     const updates = { isGoingToWaitName: '', isGoingToWaitId: '', isRequest: false };
  //     Pill.findByIdAndUpdate(req.params.id, updates, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   }
  //   res.redirect(`/pill/${req.params.id}/detail`);
  // },

  // markAsCompletePost: (req, res, next) => {
  //   if (req.body.requestPill == 'on') {
  //     const updates = { isCompleted: true };
  //     Pill.findByIdAndUpdate(req.params.id, updates, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       console.log(result);
  //     });
  //   } else if (!req.body.requestPill) {
  //     const updates = { isCompleted: false };
  //     Pill.findByIdAndUpdate(req.params.id, updates, (err, result) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //     });
  //   }
  //   res.redirect(`/pill/${req.params.id}/detail`);
  // }
};
