const About = require("../models/About");
const fs = require("fs");

const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();

    if (!about) {
      return res.status(404).json({
        message: "About section not found",
      });
    }
    res
      .status(200)
      .json({ message: "About data retrived successfully", about });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to Fetch data !", message: err.message });
  }
};

const updateAbout = async (req, res) => {
  try {
    const aboutId = "6abd81cf2ce08cb5ccd010a3";
    const about = await About.findById(aboutId);
    if (!about) {
      return res.status(404).json({
        message: "About section not found!",
      });
    }

    const { title, description_1, description_2 } = req.body;

    const updateData = {
      title,
      description_1,
      description_2,
    };

    if (req.file) {
      const previousImage = about.profileImage;

      updateData.profileImage = req.file.filename;

      if (previousImage && fs.existsSync(`./assets/${previousImage}`)) {
        fs.unlink(`./assets/${previousImage}`, (err) => {
          if (err) {
            console.log("Error deleting image:", err);
          }
        });
      }
    }

    const updatedAbout = await About.findByIdAndUpdate(
      aboutId,
      { $set: updateData },
      { new: true, runValidators: true },
    );

    return res.status(200).json({
      message: "About section has been updated",
      data: updatedAbout,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to update about!",
      error: err.message,
    });
  }
};
module.exports = { getAbout, updateAbout };
