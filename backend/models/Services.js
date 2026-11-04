const mongoose = require("mongoose");
const servicesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    icon: { type: String, required: true, trim: true },
  },
  { versionKey: false, timestamps: true },
);

module.exports = mongoose.model("Services", servicesSchema);
