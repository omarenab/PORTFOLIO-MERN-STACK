const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema(
  {
    frontend: {
      type: [String],
      required: true,
    },

    backend: {
      type: [String],
      required: true,
    },

    toolsAndWorkflow: {
      type: [String],
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Skills", skillsSchema);