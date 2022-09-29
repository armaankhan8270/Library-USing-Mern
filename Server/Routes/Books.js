import express from "express";
import {
  AllBooks,
  AllJsonBooks,
  GetBooks,
  JsonBooks,
  UploadBook,
} from "../Controllers/Books.js";

const router = express.Router();
//Checking Route
// router.get("/", (req, res) => {
//   res.send("its working and its book route");
// });

router.post("/upload", UploadBook);
router.get("/", GetBooks);
// router.get("/:id", JsonBooks);
router.get("/cv", AllBooks);
router.get("/json", AllJsonBooks);

export default router;
