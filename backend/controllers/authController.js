const Users = require("../models/Users");
const jwt = require("jsonwebtoken");

const signToken = (user) => {
  return jwt.sign(
    { id: user._id, name: user.name, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN },
  );
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "email or password invalid" });
    }
    const isCorrect = await user.correctPassword(password);
    if (isCorrect) {
      const token = signToken(user);
      return res
        .status(200)
        .json({ message: "login successfull", data: token });
    }
    return res.status(404).json({ message: "email or password invalid" });
  } catch (err) {
    res.status(500).json({ message: "Error, login faild" });
  }
};
module.exports = {login}