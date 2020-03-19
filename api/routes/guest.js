const router = require('express-promise-router')();

const GuestController = require('../controller/guests');

const {
    validateBody,
    validateParam,
    schemas
} = require('../helpers/routeHelpers');


router.route('/')
    .get(GuestController.index)
    .post(validateBody(schemas.guestSchema),
        GuestController.newGuest);

router.route('/:code')
    .get(validateParam(schemas.idSchema, 'code'),
        GuestController.getGuest)

    //put to update the entire object
    .put([validateParam(schemas.idSchema, 'code'),
            validateBody(schemas.putGuestSchema)],
        GuestController.replaceGuest)

    .patch([validateParam(schemas.idSchema, 'code'),
            validateBody(schemas.patchGuestSchema)],
        GuestController.updateGuest)

.delete(validateParam(schemas.idSchema, 'code'),
    GuestController.deleteGuest);


router.route('/:code/comments')
    .get(GuestController.getGuestComments)
    .post(GuestController.newGuestComment);




module.exports = router;
