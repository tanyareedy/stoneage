const router = require('express-promise-router')();

const commentController = require('../controller/comment');
// const { validateBody,  schemas } = require('../helpers/routeHelpers');

router.route('/trader/:code')
    .get(commentController.index)
    .post(commentController.newComment)
    .delete (commentController.deleteComment)
    .put (commentController. updateComment);



module.exports = router;
