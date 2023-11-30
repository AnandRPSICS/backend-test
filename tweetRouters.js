const express = require('express');
const tweetRouter = express.Router();

tweetRouter.get('/test', (req, res) => {
    res.json({message: "Testing purpose"});
})
tweetRouter.get('/check', (req, res) => {
    res.json({message: "check"});
})


module.exports = {tweetRouter}