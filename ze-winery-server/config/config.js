require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
    development : {
        port:process.env.PORT || 3000,
       // dbURL: process.env.MONGODB_URL,
        dbURL:'mongodb://localhost:27017/ze-winery',
        origin : ['http://localhost:5173'],
        
    },
    production : {
        port: process.env.PORT || 3000,
        dbURL: process.env.MONGODB_URL,
        origin: ['web url here']
    }
 
};

module.exports = config[env];