const mongoose = require('mongoose');
const Chance = require('chance');
const helper = require('../api/helpers/Id_code_generator.js');
let chance = new Chance();
mongoose.connect(
    "mongodb://127.0.0.1/newagebot",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const Trader = require('../api/models/trader');

let count = process.argv[2] || 100;
let counter = 0;

count = Number(count);

const run  = async ()=> {
    while (counter < count) {
        const data = new Trader({
            _id: new mongoose.Types.ObjectId(),
            code: helper.randomStr(5),
            image: 'img/traders/user.png',
            name: chance.name(),
            sex: ['male', 'female'][chance.integer({min: 0, max: 1})],
            level: ['primary', 'secondary'][chance.integer({min: 0, max: 1})],
            rating: chance.integer({min: 1, max: 5}),
            startingPrice: chance.integer({min: 1500, max: 9500}),
            winRate: chance.integer({min: 20, max: 100}),
            weeklyTrades: chance.integer({min: 50, max: 300}),
            completedTrades: chance.integer({min: 300, max: 4000}),
            totalClients: chance.integer({min: 20, max: 2300}),
            responseRate: chance.integer({min: 20, max: 100}),
            assets: ['Crypto Currency', 'Forex', 'Binary Options', 'Stocks'],
            platForm: 'All supported platforms',
            bio: `Trader Bio${chance.paragraph({sentences: 3})}`,
            __v:0
        });

       await data.save();

        console.log(`created traders ${counter +1}`);

        counter++


    }
};

console.log(count);
run();

/*Trader.find({})
    .select('-__v')
    .exec()
    .then(data => {

        console.log(data);


    })

    .catch(err => {
        console.log(err);

    });*/

