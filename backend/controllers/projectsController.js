const fs = require("node:fs");
const memoryCache = require("../utilities/memory-cache");

const Projects = require("../models/Projects");

const getProjects = async (req, res) => {
  try {
    const cacheKey = "projects";
    const cached = memoryCache.get(cacheKey);
    if (cached) {
      return res.status(200).json({ message: "cached products list", cached });
    }
    const projects = await Projects.find();
    res
      .status(200)
      .json({ message: "Project retrived successfully", projects });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addProject = async (req, res) => {
  try {
    const { title, description, techStack, gitHubUrl, liveUrl } = req.body;
    const projectImage = req.file?.filename;
    const project = await Projects.create({
      title,
      description,
      techStack,
      projectImage,
      gitHubUrl,
      liveUrl,
    });
    res
      .status(201)
      .json({ message: "Project has been added successfully", project });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { projectImage: prevImage } = await Projects.findOne({
      _id: req.params.id,
    });
    if (fs.existsSync(`./assets/${prevImage}`)) {
      fs.rm(`./assets/${prevImage}`, (err) => {
        if (err) {
          console.log(`Error in Deleting Previous Image: ${err}`);
        }
      });
    }
    const { title, description, techStack, gitHubUrl, liveUrl } = req.body;
    const projectImage = req.file?.filename;
    const project = await Projects.findByIdAndUpdate(
      req.params.id,
      {
        title,
        techStack,
        description,
        projectImage,
        gitHubUrl,
        liveUrl,
      },
      { new: true },
    );
    res.status(200).json({
      message: "Project has been updated successfully",
      project,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Projects.findByIdAndDelete(req.params.id);
    if (fs.existsSync(`./assets/${project.projectImage}`)) {
      fs.rm(`./assets/${project.projectImage}`, (err) => {
        if (err) {
          console.log(`Error in Deleting Previous Image: ${err}`);
        }
      });
    }
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProjects, addProject, updateProject, deleteProject };
