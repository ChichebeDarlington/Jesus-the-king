import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const user = await new User(req.body);
    user.save();
    res.status(200).json({ user });
  } catch (error) {
    // res.status(500).json({ msg: "Error occurred" });
    // the next parameter passes the error from the error handlingmiddleware
    next(error);
  }
};

export const login = async (req, res) => {
  res.status(200).json({ msg: "login" });
};

export const userUpdate = async (req, res) => {
  res.status(200).json({ msg: "userUpdate" });
};
