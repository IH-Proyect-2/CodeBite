const router = require('express').Router();
const indexController = require('../controllers/indexController');
const auth = require('./auth');
const user = require('./user');
const pill = require('./pill');
const comment = require('./comment');

router.get('/', indexController.index);

router.use('/', auth);
router.use('/user', user);
router.use('/pill', pill);
router.use('/comment', comment);

module.exports = router;
