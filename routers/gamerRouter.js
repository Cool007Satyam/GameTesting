const express = require("express");
const { getAllGamers, getGamerRank, getThisWeekLeaderBoard, getLastWeekLeaderBoard } = require("../controllers/gamerController");

const router = express.Router();

router.route("/").get(getAllGamers);
router.route("/getGamerByRank/:id").get(getGamerRank);
router.route("/getthisweekleaderboard").get(getThisWeekLeaderBoard);
router.route("/getlastweekleaderboard").get(getLastWeekLeaderBoard);

module.exports = router