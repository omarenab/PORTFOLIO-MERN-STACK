const Content = require("../models/Content");

const getContent = async (req, res) => {
  try {
    const content = await Content.find()
    res.status(200).json({message:"Content retrieved successfully",content});
  } catch (err) {
    res.status(500).json({ message:"Failed to retrive content data", error: err.message });
  }
};

const updateContent = async (req, res) => {
  try {
    const { header_input, linkNames, footer_input } = req.body;
    const content = await Content.findByIdAndUpdate(
      "6abd6e1dc1147f938a788c76",
      { header_input, linkNames, footer_input },
      { new: true },
    );
    res.status(200).json(content);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update content !", error: err.message });
  }
};

module.exports = { getContent, updateContent };
