const express = require("express");
const {
    postTrendsInterestOverTime,
    postTrendsAutoComplete,
    postDailyTrends

} = require("../controllers/google-trends");


const router = express.Router({ mergeParams: true });



router.route("/interest-over-time").post(postTrendsInterestOverTime);
router.route("/daily").post(postDailyTrends);
router.route("/auto-complete").post(postTrendsAutoComplete);


module.exports = router;
