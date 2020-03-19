const helper = require('../helpers/Id_code_generator');
const Trader = require('../models/trader');
const Guest = require('../models/guest');
const Comments = require('../models/comment');
const Replys = require('../models/reply');


module.exports = {
    index: async (req, res) => {
        const code = req.params.code;
        const trader = await Trader.findOne({code})
        //get all comments
        const replys = await Replys.find({owner: trader._id})
            .populate('author');
        res.status(200).json(replys);
    },
    newReply: async (req, res) => {
        //create a new Reply
        const newReply = new Replys({
            code: helper.randomStr(5),
            commentId: req.body.commentId,
            owner: req.body.owner,
            author: req.body.author,
            message: req.body.message,
            createdAt: req.body.createdAt
        });


        //get guest
        // const guest = await Guest.findById(newReply.author);
        //find / get comment
        const comment = await Comments.findById(newReply.commentId);
        //assign guestId
       newReply.commentId = comment;
        //save reply
        await newReply.save();
        //add reply Id to the  comment reply array'
        // comment.replys.push(newReply.id);
        //save comment
        await comment.save();

        console.log('here new comment ' + comment);
        // console.log('guest ' + guest);
        console.log('a new reply' + newReply);
        res.status(201).json(newReply);
    },

    updateReply: async (req, res) => {
        const newReply = req.body || {};
        // eslint-disable-next-line no-unused-vars

        // const comment = await Comment.find({code: req.params.code});
        const reply = await Replys.findOneAndUpdate({code: req.params.code}, newReply);
        res.status(200).json(reply);
    },

    //delete reply
    deleteReply: async (req, res) => {
        // eslint-disable-next-line no-unused-vars
        const reply = await Replys.deleteOne({id: req.params.id});

        res.status(200).json({success: true});
    },

};
