import express from "express";
import { AllBooks, UploadBook } from "../Controllers/Books.js";

const router = express.Router();
//Checking Route
router.get("/", (req, res) => {
  res.send("its working and its book route");
});

router.post("/Upload", UploadBook);
router.post("/", AllBooks);

export default router;
