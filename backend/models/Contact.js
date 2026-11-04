const mongoose = require("mongoose");
const validator = require("validator");
const contactSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Please enter a valid email",
      },
    },
    phone: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
  {},
);

module.exports = mongoose.model("Contact", contactSchema);
