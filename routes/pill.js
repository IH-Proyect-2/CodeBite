const router = require('express').Router();
const pillController = require('../controllers/pillController');
const middle = require('../config/middlewares');

router.get('/', pillController.index);

router.get('/create', middle.EnsureLoggedIn, pillController.createGet);
router.post('/create', middle.EnsureLoggedIn, pillController.createPost);

// router.get('/:id/detail', middle.EnsureLoggedIn, pillController.detail);
// router.get('/:id/delete', middle.EnsureLoggedIn, pillController.delete);

router.get('/:id/update', middle.EnsureLoggedIn, pillController.editGet);
router.post('/:id/update', middle.EnsureLoggedIn, pillController.editPost);

// router.post('/:id/request', middle.EnsureLoggedIn, pillController.requestPost);
// router.post('/:id/complete', middle.EnsureLoggedIn, pillController.markAsCompletePost);

module.exports = router;
