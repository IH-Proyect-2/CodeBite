const router = require('express').Router();
const commentController = require('../controllers/commentController');
const middle = require('../config/middlewares');

router.get('/:id/create', middle.EnsureLoggedIn, commentController.createGet);
router.post('/:id/create', middle.EnsureLoggedIn, commentController.createPost);

router.get('/:id/delete', middle.EnsureLoggedIn, commentController.delete);

module.exports = router;
