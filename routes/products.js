const express = require("express");
const router = express.Router();

const { getAllPlants,getAllPlantsTesting,} = require("../controllers/products");

router.route("/").get(getAllPlants);
router.route("/testing").get(getAllPlantsTesting);

module.exports = router;
