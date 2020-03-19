const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({

    code:String,
    message:String,
    owner:
        {
            type:Schema.Types.ObjectId,
            ref:'Trader'
        },
    author:
        {
            type:Schema.Types.ObjectId,
            ref:'Guest'
        },
    replys:{
        type:Schema.Types.ObjectId,
        ref:'Reply'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
});



module.exports = mongoose.model('Comment', commentSchema);
