const mongoose = require("mongoose");
const aboutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description_1: { type: String, required: true },
    description_2: { type: String, required: true },
    profileImage: { type: String },
  },
  { timestamps: true },
);
module.exports = mongoose.model("About", aboutSchema);
