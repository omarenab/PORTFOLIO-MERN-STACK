const express = require("express");
const router = express.Router();

const {
  getSkills,
  removeSkill,
  addSkill,
} = require("../controllers/skillsController");

router.get("/", getSkills);
router.post("/add", addSkill);
router.delete("/remove", removeSkill);

module.exports = router;
