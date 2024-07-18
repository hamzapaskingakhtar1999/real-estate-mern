import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("Listening in PORT: 3000!"));
