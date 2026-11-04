const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const usersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, trim: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "admin" },
  },
  { versionKey: false, timestamps: true },
);

usersSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

usersSchema.methods.correctPassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model("Users", usersSchema);
