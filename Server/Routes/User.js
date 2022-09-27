import express from "express";
import { Login, Register } from "../Controllers/User.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("its working");
});
router.post("/register", Register);
router.post("/login", Login);

export default router;
