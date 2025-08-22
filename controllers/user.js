const {v4: uuidv4} = require('uuid');
const User = require('../models/user');
const {setUser, getUser} = require('../services/auth')

async function userSignUp(req, res) {
    const {name, email, password} = req.body;
    await User.create({
        name: name,
        email: email,
        password: password,
    });
    return res.render('home');
}

async function userLogin(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({email, password});
    if(!user){
        return res.render('login');
    }
    const token = setUser(user);
    res.cookie('uid', token);
    return res.render('home');
}

module.exports = {
    userSignUp,
    userLogin,
}