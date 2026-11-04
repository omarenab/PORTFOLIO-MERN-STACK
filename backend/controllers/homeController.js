const Home = require("../models/Home");

const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    res
      .status(200)
      .json({ message: "Home content retrived successfully", data: home });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateHome = async (req, res) => {
  try {
    const { title, description, resumeButtonInput, contactButtonInput } =
      req.body;
    const home = await Home.findByIdAndUpdate(
      "68cc2b2a86984e4e4f9066d3",
      { title, description, resumeButtonInput, contactButtonInput },
      { new: true },
    );
    res.status(200).json({
      message: "Home content updated successfully",
      data: home,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getHome, updateHome };
