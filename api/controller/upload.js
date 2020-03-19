const Traders = require('../models/trader');
const Guests = require('../models/guest');

module.exports = {

    //get all traders
    index: async (req, res) => {
        const traders = await Traders.find({});
        res.status(200).json(traders);
    },
    //Creat a New Trader
    newTraderImage: async (req, res) => {
        // const newTrader = req.file.path || {};
        const result = await Traders.findOneAndUpdate({code: req.params.code}, {image:req.file.path});     //


        res.status(201).json({
          file:req.file
        });
        console.log(req.file.path)
        // console.log(trader)
    },

    newGuestImage: async (req, res) => {
        // const newTrader = await Traders.find({});

        res.status(201).json({
          file:req.file
        });
        console.log(req.file)
        // console.log(trader)
    },

};
