const Skills = require("../models/Skills");

const getSkills = async (req, res) => {
  try {
    const skills = await Skills.findOne();
    if(!skills){
      return res.status(404).json({message:"Skills not found !"})
    }
   return res
      .status(200)
      .json({ message: "Skills fetched successfully", data: skills });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch skills !",message:err.message });
  }
};

const addSkill = async (req, res) => {
  try {
    const { category, skill } = req.body;

    const allowedCategories = ["frontend", "backend", "toolsAndWorkflow"];

    if (!allowedCategories.includes(category)) {
      return res.status(400).json({
        message: "Invalid category",
      });
    }

    if (typeof skill !== "string" || !skill.trim()) {
      return res.status(400).json({
        message: "Skill is required",
      });
    }

    let skills = await Skills.findOne();

    if (!skills) {
      const initialData = {
        frontend: [],
        backend: [],
        toolsAndWorkFlow: [],
      };
       initialData[category].push(skill.trim());

      skills = await Skills.create(initialData);

      return res.status(201).json({
        message: "Skill added successfully",
        skills,
      });
    }
    

    const exists = skills[category].some(
      (item) => item.toLowerCase() === skill.trim().toLowerCase(),
    );

    if (exists) {
      return res.status(409).json({
        message: "Skill already exists",
      });
    }

    skills[category].push(skill.trim());

    await skills.save();

    return res.status(201).json({
      message: "Skill added successfully",
      skills,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add skill",
      error: error.message,
    });
  }
};


const removeSkill = async (req, res) => {
  try {
    const { category, skill } = req.body;

    const allowedCategories = [
      "frontend",
      "backend",
      "toolsAndWorkflow",
    ];

    if (!allowedCategories.includes(category)) {
      return res.status(400).json({
        message: "Invalid category",
      });
    }

    if (typeof skill !== "string" || !skill.trim()) {
      return res.status(400).json({
        message: "Skill is required",
      });
    }

    const skills = await Skills.findOne();

    if (!skills) {
      return res.status(404).json({
        message: "Skills document not found",
      });
    }

    const skillIndex = skills[category].findIndex(
      (item) => item.toLowerCase() === skill.trim().toLowerCase()
    );

    if (skillIndex === -1) {
      return res.status(404).json({
        message: "Skill not found",
      });
    }

    // Remove the skill from the selected category
    skills[category].splice(skillIndex, 1);

    await skills.save();

    return res.status(200).json({
      message: "Skill deleted successfully",
      skills,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete skill",
      error: error.message,
    });
  }
};
module.exports = { getSkills, addSkill, removeSkill };

