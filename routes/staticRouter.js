const express = require('express');

const router = express.Router();

router.get('/', async function name(req, res) {
    return res.render('home')
});
module.exports = router;