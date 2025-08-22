const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
console.log(secret);

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email
    }, secret);
}

function getUser(token){
    if(!token){
        return null;
    }
    try{
        return jwt.verify(token, secret);
    }
    catch(error){
        return null;
    }
    
}

module.exports = {
    setUser,
    getUser
}