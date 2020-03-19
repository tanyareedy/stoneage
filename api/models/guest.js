const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({

    code: String,
    image: String,
    name: String,
    email: String,
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'Trader',
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],

    createdAt:{
        type:Date,
        default:Date.now
    },
});

const Guest = mongoose.model('Guest', guestSchema);
module.exports = Guest;
