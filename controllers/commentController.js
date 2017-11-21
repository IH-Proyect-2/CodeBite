const Comment = require('../models/Comment');
const Pills = require('../models/Pill');

module.exports = {
  createGet: (req, res, next) => {
    res.render('comments/create', {
      user: res.locals.user,
      idPill: req.params
    });
  },
  createPost: (req, res, next) => {
    Pill.find({_id: req.params.id}, (err, pill) => {
      if (err) {
        console.log(err);
      }
      let newComment = new Comment({
        pillId: req.params.id,
        senderId: res.locals.user._id,
        senderName: res.locals.user.username,
        receiverId: pill[0].refCreatorId,
        // title: req.body.title,
        description: req.body.description,
        isRespond: true
      });
      newComment.save()
      .then((result, err) => {
        res.redirect(`../../pill/${req.params.id}/detail`);
      })
      .catch(error => next(error));
    });
  },

  delete: (req, res, next) => {
    Review.findByIdAndRemove(req.params.id, (err, obj) => {
      if (err) {
        return next(err);
      }
      res.redirect("/pill");
    });
  }
};
