import mongoose from "mongoose";
const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
      //   unique: true,
    },
    year: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
      // unique: true,
    },
    quote: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Book", BookSchema);
