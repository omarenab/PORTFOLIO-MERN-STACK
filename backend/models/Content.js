const mongoose = require("mongoose");
const contentSchema = new mongoose.Schema(
  {
    header_input: {
      type: String,
      required: true,
    },

    linkNames: {
      type: [String],
      required: true,
    },
    socialLinks: [
      {
        platform: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],

    footer_input: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Content", contentSchema);
