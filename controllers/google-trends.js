const ErrorResponse = require("../utils/errorResponse");
const googleTrends = require('google-trends-api');

// @route     POST /trends/interest-over-time
exports.postTrendsInterestOverTime =  (req, res) => {
    googleTrends.interestOverTime({ keyword: req.body.keyword }, (err, results) => {
        if (err) {
            res.status(400).json({
                success: false,
                error: JSON.parse(err),
            });
        } else {
            res.status(200).json({
                success: true,
                data: JSON.parse(results),
            });
        }
    });
};

// @route    POST /trends/auto-complete
exports.postTrendsAutoComplete =  (req, res) => {
    googleTrends.autoComplete({ keyword: req.body.keyword }, (err, results) => {
        if (err) {
            res.status(400).json({
                success: false,
                error: JSON.parse(err),
            });
        } else {
            res.status(200).json({
                success: true,
                data: JSON.parse(results),
            });
        }
    });
};

// @route    POST /trends/daily
exports.postDailyTrends =  (req, res) => {
    googleTrends.dailyTrends({ keyword: req.body.keyword }, (err, results) => {
        if (err) {
            res.status(400).json({
                success: false,
                error: JSON.parse(err),
            });
        } else {
            res.status(200).json({
                success: true,
                data: JSON.parse(results),
            });
        }
    });
};


exports.webhook = (req, res) =>{
    console.log('this is a webhook called');
    res.status(200).json({
        success: true,
        data: {}
    });
}