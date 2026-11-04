const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload.middleware");

const { getAbout, updateAbout } = require("../controllers/aboutController");

router.get("/", getAbout);
router.patch("/update", upload.single("profileImage"), updateAbout);

module.exports = router;
