const helper = require('../helpers/Id_code_generator');
const Trader = require('../models/trader');
const Guest = require('../models/guest');
const Comment = require('../models/comment');
const Replys = require('../models/reply');
// const _ = require('lodash');


module.exports = {
    index: async (req, res) => {
        const code = req.params.code;
        const trader = await Trader.findOne({code});
        //get all comments
        let comments = await Comment.find({owner: trader._id})
            .populate('author');
        comments = JSON.parse(JSON.stringify(comments));

        console.log('index comments' + trader._id);


        for (const index in comments) {
            let comment = comments[index];
            comment = await Replys.find({commentId: comment._id})
                .populate('author');

            comments[index].replys = comment
        }

        res.status(200).json(comments);
    },
    newComment: async (req, res) => {
        const code = req.params.code;
        const {author, message, createdAt} = req.body;
        console.log(req.body);
        if(!author){
            return res.json({
                error:'Please Select an Author',
            })
        }
        const trader = await Trader.findOne({code});
        //create a new comment
        const newComment = new Comment({
            code: helper.randomStr(5),
            owner: trader._id,
            author,
            message,
            createdAt
        });

        //get guest
        const guest = await Guest.findOne(newComment.author);
        //assign guestID
        // newComment.author = guest;

        //save the comment
        if (guest === '') {
            console.log('User can not be empty');
        }
        await newComment.save();
        guest.comments.push(newComment.id);
        await guest.save();
        //add comment Id to the guest comment array

        console.log('new comment ' + newComment);
        res.status(201).json(newComment);
    },

    //delete comment
    deleteComment: async (req, res) => {
        // eslint-disable-next-line no-unused-vars
        // const comment = await Comment.findOne({code: req.params.code});
        const comment = await Comment.deleteOne({code: req.params.code});
        // const reply = await Replys.findById({commentId:comment._id});
        const reply = await Replys.deleteOne()
        console.log('the Comment'+ comment._id);
        // console.log('Reply' + reply);
        res.status(200).json({success: true});
    },

    //update comment
    updateComment: async (req, res) => {
        const newComment = req.body || {};
        // eslint-disable-next-line no-unused-vars

        // const comment = await Comment.find({code: req.params.code});
        const comment = await Comment.findOneAndUpdate({code: req.params.code}, newComment);
        res.status(200).json(comment);
    },


    getReply: async (req, res) => {
        //get all comments
        const comments = await Replys.find({})

            .populate('author');
        res.status(200).json(comments);
    },

    newReply: async (req, res) => {
        //create a new comment
        const newReply = new Replys({
            code: helper.randomStr(5),
            author: req.body.author,
            comment: req.body.comment,
            message: req.body.message,
            createdAt: new Date()
        });
        //get trader
        const trader = await Trader.findOne(newReply.author);
        //assign traderID
        // newComment.author = guest;

        //save the comment
        if (trader === '') {
            console.log('User can not be empty');
        }
        await newReply.save();
        trader.comments.push(newReply.id);
        await trader.save();

        //add comment Id to the guest comment array

        console.log('new comment ' + newReply);
        res.status(201).json(newReply);
    },


};

