const Users = require("../models/Users");

const createUser = (role) => {
  return async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      if (!["admin", "user"].includes(role)) {
        return res.status(400).json("Invalid request");
      }
      const existing = await Users.findOne({ email });
      if (existing) {
        return res.status(400).json("Email already exists !");
      }
      const user = await Users.create({ name, email, password, role });
      return res
        .status(201)
        .json({ message: `${role} created successfully`, data: user });
    } catch (error) {
      return res.status(500).json({
        message: "Server error while creating user",
        error: error.message,
      });
    }
  };
};
const getUsers = async (req, res) => {
  const users = await Users.find().select("-password");
  res.status(200).json({ message: "user list", data: users });
};
module.exports = {createUser , getUsers}