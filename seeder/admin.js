const mongoose = require('mongoose');

const helper = require('../api/helpers/Id_code_generator.js');
const bcrypt = require("bcrypt");

mongoose.connect(
    "mongodb://127.0.0.1/newagebot",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const User = require('../api/models/user');


//pushr
 const runAdmin = async ()=> bcrypt.hash('trader@2020',10, (err, hash) =>{
    const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        code: helper.randomStr(5),
        email: 'manager@newagebot.com',
        password: hash,
        __v:0
    });
    newUser.save();
    console.log(`created Admin`);
});


 runAdmin();


