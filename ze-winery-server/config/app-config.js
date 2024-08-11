require('dotenv').config();

const userCookieName = process.env.USERCOOKIENAME ||'noName';


module.exports = {userCookieName}