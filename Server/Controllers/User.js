import LUser from "../Models/User.js";
import bcrypt from "bcryptjs";
export const Register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.username, salt);
  try {
    const newUser = new LUser({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};
export const Login = async (req, res, next) => {
  try {
    const Username = await LUser.find({ username: req.body.username });
    if (!Username)
      return res.json("Username Not Found If You Are New Please Signin");

    const password = await LUser.find({ password: req.body.password });
    if (!password) return res.json("pasword is incorrect");

    res.json("Welcome To Our Website");
  } catch (error) {
    next(error);
  }
};
