const helper = require('../helpers/Id_code_generator');
const Trader = require('../models/trader');
const Guests = require('../models/guest');
const Comments = require('../models/comment');
const Replys = require('../models/reply');
const checkAuth = require('../middleware/check-auth');
const Joi = require('joi');
module.exports = {

    //get all traders
    index: async (req, res) => {
        let traders;
        if (req.query.hasOwnProperty('search')) {
            traders = await Trader.find({name: {$regex: new RegExp(`.*${req.query.search}.*`), $options: 'i'}});

        } else {
            traders = await Trader.find({}).sort([['createdAt', -1]]);

        }

        res.status(200).json(traders);
    },

    search: async (req, res) => {
        const traders = await Trader.find({name: {$regex: new RegExp(`.*hall.*`), $options: 'i'}});
        res.status(200).json(traders);
    },

    newTrader: async (req, res) => {
        const newTrader = new Trader({
            code: helper.randomStr(5),
            image: req.value.body.image,
            name: req.value.body.name,
            sex: req.value.body.sex,
            level: req.value.body.level,
            rating: req.value.body.rating,
            startingPrice: req.value.body.startingPrice,
            winRate: req.value.body.winRate,
            weeklyTrades: req.value.body.weeklyTrades,
            completedTrades: req.value.body.completedTrades,
            totalClients: req.value.body.totalClients,
            responseRate: req.value.body.responseRate,
            platForm: req.value.body.platForm,
            assets: req.value.body.assets,
            createdAt: new Date()
        });
        const trader = await newTrader.save();
        //find the new Trader

        res.status(201).json({
            message: 'Successfully Created traders',
            createdTraders: trader
        });
        // console.log(trader)
    },
    //get a Single Trader
    getTrader: async (req, res) => {

        const trader = await Trader.findOne({code: req.value.params.code});
        res.status(200).json(trader);

    },
    //update ONE trader field
    replaceTrader: async (req, res) => {
        const newTrader = req.value.body || {};
        // eslint-disable-next-line no-unused-vars
        const result = await Trader.findOneAndUpdate({code: req.value.params.code}, newTrader);
        res.status(200).json({success: true});
    },
    //update ALL trader field
    updateTrader: async (req, res) => {
        const newTrader = req.value.body || {};
        // eslint-disable-next-line no-unused-vars
        const result = await Trader.findOneAndUpdate({code: req.value.params.code}, newTrader);
        res.status(200).json({success: true});
    },
    //delete trader
    deleteTrader: async (req, res) => {
        // eslint-disable-next-line no-unused-vars
        // const code = req.params.code;
        //find Trader
        const manager = await Trader.findOne({code: req.params.code});
        // const  comment = await Comments.find({author:author._id})

        // all  delete request
        //delete all comment with matching id
        const comment = await Comments.deleteMany({owner: manager._id});
        //delete all guest with matching id
        const guest = await Guests.deleteMany({manager: manager._id});
        //delete all replies with matching id
        const reply = await Replys.deleteMany({owner: manager._id});
        //delete trader
        const trader = await Trader.deleteOne({code: req.params.code});


        // console.log('manager', {manager:manager._id});
        // console.log('Author', {author});
        console.log('Reply', {reply});


        res.status(200).json({success: true});
    },
    //create a user
    newTraderGuest: async (req, res) => {
        //Create a new Guest
        const newGuest = new Guests({
            code: helper.randomStr(5),
            image: req.value.body.image,
            name: req.value.body.name,
            email: req.value.body.email,
            createdAt: new Date()
        });
        //get Trader
        const trader = await Trader.findOne({code: req.value.params.code});
        //Assign Trader as a guest's Owner
        newGuest.manager = trader;
        //Validate trader id
        if (!trader) {
            console.log('Trader not found');
            return
        }
        //save the guest
        await newGuest.save();
        //add guest to the traders ,manager array 'guests'
        trader.guests.push(newGuest.id);
        await trader.save();
        res.status(201).json(newGuest);
    },
    getTraderGuests: async (req, res) => {

        const trader = await Trader.findOne({code: req.params.code})

            .populate({path: 'guests', options: {sort: {createdAt: -1}}});
        console.log(trader.guests);
        res.status(200).json(trader.guests);
    },
    deleteTraderGuest: async (req, res) => {
        //check if guest exist
        //get guest owner from trader collect aka manager
        const manager = await Trader.findOne({code: req.params.code});

        //get the guest
        const guest = await Guests.deleteMany({manager: manager._id});
        // const comment = await Comments.findById(guest.comments);
        // const reply = await Replys.findById(comment.reply);
        //delete the guest from trader
        await guest.deleteOne();
        //remove the guest ID from the manager list
        manager.guests.pull(guest._id);
        //delete the  guest comment
        // await comment.deleteOne();
        //delete reply
        // await reply.deleteOne(comment.replys);
        // await manager.save();

        console.log('guest ' + guest);
        // console.log('comments' + comment);
        // console.log(reply);
        res.status(200).json({success: true});
    },
    newTraderComment: async (req, res) => {
        //create a new comment
        const newReply = new Replys({
            code: helper.randomStr(5),
            message: req.body.message,
            createdAt: new Date()
        });
        // get Trader
        const trader = await Trader.findOne({code: req.params.code});
        //Assign Trader as comment's author
        newReply.author = trader;
        //validate the trader
        if (!trader) {
            console.log('Trader not found');
            return
        }
        //save the comment
        await newReply.save();
        //add reply to the traders author array 'comments'
        trader.comments.push(newReply.id);
        await trader.save();
        res.status(201).json(newReply);
    },
    getTraderComments: async (req, res) => {

        const trader = await Trader.findOne({code: req.params.code});
        // const guest = await Guests.findOne({code: req.params.code})
        //     .populate('author');
        console.log('Trader', trader.comments);
        res.status(200).json(trader.comments)

    },


};


