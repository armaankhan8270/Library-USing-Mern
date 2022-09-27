import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRouter from "./Routes/User.js";
import BookRouter from "./Routes/Books.js";
const app = express();

const url =
  "mongodb+srv://armaankhan:armaan242@cluster0.ygbfntv.mongodb.net/?retryWrites=true&w=majority";
const connect = () => {
  try {
    mongoose.connect(url).then((e) => {
      console.log("successfully connected to mongodb");
    });
  } catch (e) {
    console.log(e);
  }
};

// app.use("/post", PostRouter);

//for post request in json from react app
app.use(cors());
app.use(express.json());

// error handler
app.use((err, req, res, next) => {
  return res.json(err);
});
//Routes always in end
app.use("/user", UserRouter);
app.use("/book", BookRouter);
app.listen(3001, (req, res) => {
  connect();
  console.log("server is runnning on 3001");
});
