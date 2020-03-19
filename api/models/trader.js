const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const traderSchema = new Schema({
    code:String,
    image:String,
    name:String,
    sex:String,
    level:String,
    rating:Number,
    startingPrice:Number,
    winRate:Number,
    weeklyTrades:Number,
    completedTrades:Number,
    totalClients: Number,
    responseRate:Number,
    platForm:String,
    assets:Array,
    versionKey:false,
    createdAt:{
        type:Date,
        default:Date.now
    },
    guests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Guest',
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    reply: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],


});
traderSchema.index({name:'text'});

const  Trader = mongoose.model('Trader', traderSchema);

module.exports = Trader;
