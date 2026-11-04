const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    projectImage: { type: String, trim: true },
    techStack: [{ type: String, trim: true }],
    gitHubUrl: { type: String, required: true },
    liveUrl: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongoose.model("Projects", projectSchema);
