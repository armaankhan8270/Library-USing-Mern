import LUser from "../Models/User.js";
import bcrypt from "bcryptjs";
export const Register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  try {
    const newUser = new LUser({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.send(req.body);
  } catch (err) {
    next(err.message);
  }
};

export const Login = async (req, res, next) => {
  try {
    const user = await LUser.findOne({ username: req.body.username });
    if (!user) return next("User not found!Pleae Check Your Username");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    console.log(user.password + req.body.password);
    if (!isPasswordCorrect)
      return next(
        "Wrong password or username!If You Are New Please SignUp first"
      );
    const { password, username } = user;

    res.json("welcome" + " " + req.body.username);
  } catch (err) {
    next(err.message);
    console.log(err.message);
  }
};
