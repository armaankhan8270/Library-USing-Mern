import mongoose from "mongoose";
const BookscvSchema = new mongoose.Schema({
  Height: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Publisher: {
    type: String,
    required: true,
  },
});

export default mongoose.model("bookscv", BookscvSchema);
