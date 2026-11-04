const express = require("express");
const router = express.Router();

const { getHome, updateHome } = require("../controllers/homeController");

router.get("/", getHome);
router.put("/update", updateHome);

module.exports = router;
