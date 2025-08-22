const shortid = require('shortid');
const URL = require('../models/url');

async function generateNewShortURL(req, res) {
    const shortID = shortid.generate();
    const body = req.body;

    console.log(body, shortID);

    if (!body.url) {
        return res.status(400).json({ error: "No redirect URL provided" });
    }

    try {
        await URL.create({
            shortId: shortID,
            redirectUrl: body.url,
            createdBy: req.user._id,
            visitHistory: [],
        });
        return res.render('home', {id: shortID});
    } catch (err) {
        console.error("Error creating short URL:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function redirectShortURL(req, res) {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: new Date() } } },
            { new: true }
        );
        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        return res.redirect(entry.redirectUrl);
    } catch (err) {
        console.error("Error redirecting short URL:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function getAnalyticsById(req, res) {
    const shortId = req.params.shortId;
    try{
        const details = await URL.findOne({shortId});
        if(!details){
            res.status(404).json('No such short URL exists.');
        }
        return res.json({totalClicks : details.visitHistory.length, analytics: details.visitHistory});
    }catch(err){
        console.error("Error finding analytics of the given short URL:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
}

async function getAnalytics(req, res) {
    console.log(req.user._id);
    const allUsers = await URL.find({createdBy:req.user._id});
    console.log(allUsers);
    return res.render('analytics', {allUsers: allUsers});
}

module.exports = {
    generateNewShortURL,
    redirectShortURL,
    getAnalyticsById,
    getAnalytics,
};
