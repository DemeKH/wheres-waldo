const express = require("express");
const mapController = require("./../controllers/mapController");
const router = express.Router();

router.route("/:position").get(mapController.getMapByPosition);
router.route("/get-leaderboard/:mapName").get(mapController.getLeaderboard);
router.route("/save-highscore").post(mapController.saveHighscore);
router.route("/").get(mapController.getAllMaps);

module.exports = router;
