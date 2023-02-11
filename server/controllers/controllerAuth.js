import User from "../models/User.js";
import { hashPassword } from "../bcrypt/secure.js";
import { comparePassword } from "../bcrypt/secure.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name) {
    return res.status(400).json({ msg: "Name is required" });
  }
  if (!password) {
    return res.status(400).json({ msg: "Password is required" });
  }
  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }
  const emailExist = await User.findOne({ email });
  if (emailExist) {
    return res.status(400).json({ msg: "Email already existed" });
  }
  // hashed password
  const passwordHashed = await hashPassword(password);

  const user = await new User({ name, email, password: passwordHashed });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  try {
    await user.save();
    user.password = undefined;
    return res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error occurred" });
    // the next parameter passes the error from the error handlingmiddleware
    // next(error);
  }
};

export const login = async (req, res) => {
  res.status(200).json({ msg: "login" });
};

export const userUpdate = async (req, res) => {
  res.status(200).json({ msg: "userUpdate" });
};
