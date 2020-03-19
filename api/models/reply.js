const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const replySchema = new Schema({

    code:String,
    message:String,
    owner:
        {
            type:Schema.Types.ObjectId,
            ref:'Trader'
        },
    author:{
        type:Schema.Types.ObjectId,
        ref:'Trader'
    },

    commentId:
        {
            type:Schema.Types.ObjectId,
            ref:'Comment'
        },
    createdAt:{
        type:Date,
        default:Date.now
    },
});


module.exports = mongoose.model('Reply', replySchema);
