const express = require("express");
const { getContent, updateContent } = require("../controllers/contentController");
const router = express.Router();

router.get("/",getContent);
router.put("/update", updateContent);


module.exports = router;