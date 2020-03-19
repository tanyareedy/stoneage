const Joi = require('joi');

module.exports = {
    validateParam: (schema, name) => {
        return (req, res, next) => {

            const result = Joi.validate({param: req['params'][name]}, schema);
            if (result.error) {
                return res.status(400).json(result.error);
                //error happened
            } else {
                if (!req.value)
                    req.value = {};

                if (!req.value['params'])
                    req.value['params'] = {};

                req.value['params'][name] = result.value.param;
                next();
            }
        }
    },

    validateBody: (schema) => {
        return (req, res, next) => {
            const result = Joi.validate(req.body, schema);

            if (result.error) {
                return res.status(400).json(result.error);
            } else {
                if (!req.value)
                    req.value = {};
                if (!req.value['body'])
                    req.value['body'] = {};
                req.value['body'] = result.value;
                next();
            }
        }
    },

//post schema can be used to validate PUT
    schemas: {
        traderSchema: Joi.object().keys({
            name: Joi.string().required(),
            image:Joi.string() ,
            sex: Joi.string(),
            level:Joi.string().required(),
            rating:Joi.number().required(),
            startingPrice:Joi.number().required(),
            winRate:Joi.number().required(),
            weeklyTrades:Joi.number().required(),
            completedTrades:Joi.number().required(),
            totalClients:Joi.number().required(),
            responseRate:Joi.number().required(),
            platForm:Joi.string(),
            assets:Joi.array().items(Joi.string()),
            createdAt:Joi.string()

        }),

       //PATCH schema  to validate optional body parameters
        traderOptionalSchema: Joi.object().keys({
            name: Joi.string(),
            image:Joi.string() ,
            sex: Joi.string(),
            level:Joi.string(),
            rating:Joi.number(),
            startingPrice:Joi.number(),
            winRate:Joi.number(),
            weeklyTrades:Joi.number(),
            completedTrades:Joi.number(),
            totalClients:Joi.number(),
            responseRate:Joi.number(),
            platForm:Joi.string(),
            assets:Joi.array().items(Joi.string()),
            createdAt:Joi.string()
        }),


       traderGuestSchema: Joi.object().keys({
           image: Joi.string(),
           name: Joi.string().required(),
           email: Joi.string().email().required(),
           createdAt:Joi.number()
       }),

        guestSchema: Joi.object().keys({
            manager:Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
            // image: Joi.string(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            createdAt:Joi.number()
        }),

        putGuestSchema: Joi.object().keys({
            image: Joi.string(),
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            createdAt:Joi.number()
        }),

        patchGuestSchema: Joi.object().keys({
            image: Joi.string(),
            name: Joi.string(),
            email: Joi.string().email(),
            createdAt:Joi.number()
        }),

        traderCommentSchema:Joi.object().keys({
            message: Joi.string().required(),
            createdAt:Joi.number()
        }),



        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-zA-Z]{5}$/).required()
        })
    }
    // end module
};
