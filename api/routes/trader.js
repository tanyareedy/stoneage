const router = require('express-promise-router')();
const TraderController = require('../controller/trader');
const {validateParam, validateBody, schemas} = require('../helpers/routeHelpers');
const checkAuth = require('../middleware/check-auth');


router.route('/')
    .get(TraderController.index)

    .post(validateBody(schemas.traderSchema), TraderController.newTrader);

router.route('/search')
    .get(TraderController.search);

router.route('/:code')
    .get(validateParam(schemas.idSchema, 'code'), TraderController.getTrader)

    //patch is used to replace All fields in an Object
    .put([validateParam(schemas.idSchema, 'code'),
            validateBody(schemas.traderSchema)],
        TraderController.replaceTrader)

    //patch is used to replace only a particular field in an object
    .patch([validateParam(schemas.idSchema, 'code'),
            validateBody(schemas.traderOptionalSchema)],
        TraderController.updateTrader)

    //delete trader
    .delete(TraderController.deleteTrader);

router.route('/:code/guests')
    .get(validateParam(schemas.idSchema, 'code'), TraderController.getTraderGuests)
    .post([validateParam(schemas.idSchema, 'code'),
            validateBody(schemas.traderGuestSchema)],
        TraderController.newTraderGuest)
    .delete(TraderController.deleteTraderGuest);


router.route('/:code/comments')
    .get(validateParam(schemas.idSchema, 'code'), TraderController.getTraderComments)
    .post(TraderController.newTraderComment);


module.exports = router;


