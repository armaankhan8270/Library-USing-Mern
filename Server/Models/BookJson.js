import mongoose from "mongoose";
const JsonBookSchema = new mongoose.Schema(
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

    year: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
      // unique: true,
    },
    imageLink: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("JsonBook", JsonBookSchema);
