const {getUser} = require('../services/auth');

async function restrictToLoggedInUser(req, res, next) {
    const userUid = req.cookies?.uid; 
    if(!userUid){
        return res.redirect("/static/login");
    }
    const user = getUser(userUid);
    if(!user){
        return res.redirect("/static/login");
    }
    req.user = user;
    next();
}

module.exports = { 
    restrictToLoggedInUser,
};