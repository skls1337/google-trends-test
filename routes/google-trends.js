const express = require("express");
const {
    postTrendsInterestOverTime,
    postTrendsAutoComplete,
    postDailyTrends,
    webhook

} = require("../controllers/google-trends");


const router = express.Router({ mergeParams: true });



router.route("/interest-over-time").post(postTrendsInterestOverTime);
router.route("/daily").post(postDailyTrends);
router.route("/auto-complete").post(postTrendsAutoComplete);
router.route('/webhook').post(webhook);


module.exports = router;
