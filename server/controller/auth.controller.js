import User from "../models/user.model.js";
import bcrpytjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcrpytjs.hashSync(password, 10); // Salt. Hash variable to make password encrypted

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json("User created successfully.");
  } catch (error) {
    next(error);
  }
};
