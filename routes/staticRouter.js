const express = require('express');

const router = express.Router();

router.get('/createUrl', async function name(req, res) {
    return res.render('home');
});

router.get('/signup', async (req, res) => {
    return res.render("signup");
})
router.get('/login', async (req, res) => {
    return res.render("login");
})
module.exports = router;