const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema(
  {
    headline: { type: String, required: true },
    description: { type: String, required: true },
    resumeButtonInput: { type: String },
    contactButtonInput: { type: String },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Home", homeSchema);
