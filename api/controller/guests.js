const helper = require('../helpers/Id_code_generator');

const Guest = require('../models/guest');
const Trader = require('../models/trader');
const Comments = require('../models/comment');


module.exports = {
    index: async (req, res) => {
        //get all the users
        const guests = await Guest.find({})

            .populate('comments');
        res.status(200).json(guests);
    },
    // eslint-disable-next-line no-unused-vars
    newGuest: async (req, res, next) => {
        console.log('req.value', req.value);
        //1. find the actual manager/trader
        const manager = await Trader.findById(req.value.body.manager);
        //2. Create a new Guest
        const newGuest = new Guest({
            code: helper.randomStr(5),
            image: req.value.body.image,
            name: req.value.body.name,
            email: req.value.body.email,
            createdAt: new Date()
        });

        //ignore the manager property for now
        delete newGuest.manager;

        const guest = new Guest(newGuest);

        //insert the value of the guest manager here
        guest.manager = manager;
        await guest.save();

        //3. add newly created user to the actual manager
        manager.guests.push(guest._id);
        await manager.save();
        //finished
        res.status(200).json(manager);

    },
    // eslint-disable-next-line no-unused-vars
    getGuest: async (req, res, next) => {
        const guest = await Guest.findOne({code: req.value.params.code});
        res.status(200).json(guest);
    },
    // eslint-disable-next-line no-unused-vars
    replaceGuest: async (req, res, next) => {
        const newGuest = req.value.body || {};
        // eslint-disable-next-line no-unused-vars
        const guest = await Guest.findOneAndUpdate({code:req.value.params.code}, newGuest);
        res.status(200).json({success: true});
    },
    // eslint-disable-next-line no-unused-vars
    updateGuest: async (req, res, next) => {
        const newGuest = req.value.body;
        // eslint-disable-next-line no-unused-vars
        const result = await Guest.findOneAndUpdate({code: req.value.params.code}, newGuest);
        res.status(200).json({success: true});

    },
    deleteGuest: async (req, res) => {
        //get guest
        const guest = await Guest.findOne({code: req.params.code});
        const manager = await Trader.findOne(guest.manager);

        manager.guests.pull(guest._id);
        await manager.save();
        await guest.deleteOne();
        // console.log(guest._id);
        console.log(manager._id);
        console.log(guest._id);


        res.status(200).json({success: true});
    },

    newGuestComment: async (req, res) => {
        //create a new comment
        const newComment = new Comments({
            code: helper.randomStr(5),
            message: req.body.message,
            createdAt: new Date()
        });
        // get Guests
        const guest = await Guest.findOne({code: req.params.code});
        console.log(guest);
        //Assign Guests as comment's author
        newComment.author = guest;
        //validate the trader
        if (!guest) {
            console.log('Trader not found');
            return
        }
        //save the comment
        await newComment.save();
        //add comment to the traders author array 'comments'
        guest.comments.push(newComment.id);
        await guest.save();
        res.status(201).json(newComment);
    },

    getGuestComments: async (req, res) => {
        // const guest = await Guest.findOne({code: req.params.code})
        const trader = await Trader.findOne({code: req.params.code});
        const guests = await Guest.find({})
        const comments = await Comments.find({})


        guests.comments.push(comments);

        // .populate('comments');
        // console.log('Guest Comment', guests);
        // console.log('Guest Comment', trader);
        // console.log('Comment', comments);
        // res.status(200).json(guests);

        res.status(200).json(guests)

    },


};

