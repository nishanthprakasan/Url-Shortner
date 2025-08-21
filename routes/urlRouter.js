const express = require('express');
const {generateNewShortURL, redirectShortURL, getAnalyticsById, getAnalytics} = require('../controllers');

const router = express.Router()

router.route('/:shortId')
.get(redirectShortURL);

router.route('/url')
.post(generateNewShortURL);

router.route('/url/analytics')
.get(getAnalytics);

router.route('/url/analytics/:shortId')
.get(getAnalyticsById);

router.route();

module.exports = router;