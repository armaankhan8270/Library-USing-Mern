import express from "express";
import { AllBooks, UploadBook, UploadBookcv } from "../Controllers/Books.js";

const router = express.Router();
//Checking Route
// router.get("/", (req, res) => {
//   res.send("its working and its book route");
// });

router.post("/upload", UploadBook);
router.post("/uploadcv", UploadBookcv);
router.get("/", AllBooks);

export default router;
