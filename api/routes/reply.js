const router = require('express-promise-router')();

const replyController = require('../controller/reply');

// const { validateBody,  schemas } = require('../helpers/routeHelpers');

router.route('/trader/:code')
    // .get(replyController.index)
    .post(replyController.newReply)
    .put (replyController. updateReply)
    .delete(replyController.deleteReply);

module.exports = router;

