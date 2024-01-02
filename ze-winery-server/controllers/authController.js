const userCookieName = require('../config/app-config');
const {userModel} = require('../models');
const utils = require('../utils')


const bsonToJson = (data) => { return JSON.parse(JSON.stringify(data)) };
const removePassword = (data) => {
    const { password, __v, ...userData } = data;
    return userData
}


const register = (req,res,next) => {

    
   
    const { username, email, password,rePassword} = req.body;

    if(password !== rePassword) {
        throw new Error({error: 'Passwords mismatch!'})
    }

    return  userModel.create({ username, email, password ,rePassword})
    .then((createdUser) => {
        createdUser = bsonToJson(createdUser);
        createdUser = removePassword(createdUser);

        const token = utils.jwt.createToken({ id: createdUser._id });
        if (process.env.NODE_ENV === 'production') {
            res.cookie(userCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
        } else {
            res.cookie(userCookieName, token, { httpOnly: true })
        }
        res.status(200)
            .send(createdUser);
    })
    .catch(err => {
       
        if (err.name === 'MongoServerError' && err.code === 11000) {
          
            let field = err.message.split("index: ")[1];
            field = field.split(" dup key")[0];
            field = field.substring(0, field.lastIndexOf("_"));

            res.status(409)
                .send({ message: `This ${field} is already registered!` });
            return;
        }
        next(err);
    });
}


module.exports = {
    register
}

