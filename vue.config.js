const env = process.env;
const path = require('path');
// const url = env.APP_PROTOCOL;
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:2000/',
            },
            '/uploads':{
                target: 'http://localhost:2000/',
                ws:false,
                changeOrigin:true
            },

        }
    }
};


console.log(__dirname);
