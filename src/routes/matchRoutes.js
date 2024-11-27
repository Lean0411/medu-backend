// routes/matchRoutes.js
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const auth = require('../middlewares/authenticationMiddleware');

router.post('/like/:targetUserId', auth, matchController.likeUser);
router.post('/dislike/:targetUserId', auth, matchController.dislikeUser);
router.get('/matches', auth, matchController.getMatches);
router.get('/pending', auth, matchController.getPendingLikes);

module.exports = router;