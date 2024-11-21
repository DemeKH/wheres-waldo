const express = require("express");
const mapController = require("./../controllers/mapController");
const router = express.Router();

router.route("/:position").get(mapController.getMapByPosition);

module.exports = router;
