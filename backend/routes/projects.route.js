const express = require("express");
const router = express.Router();
const upload = require('../middlewares/upload.middleware')

const { getProjects, updateProject, addProject, deleteProject } = require("../controllers/projectsController");

router.get("/", getProjects);
router.post("/add",upload.single("projectImage"), addProject)
router.put("/update/:id",upload.single("projectImage") ,updateProject);
router.delete("/remove/:id", deleteProject)

module.exports = router;
