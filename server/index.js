import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";

dotenv.config({ path: "../.env" });

const app = express();

app.use("/api/user", userRouter);

/* mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err)); */

app.listen(3000, () => console.log("Listening in PORT: 3000 !!!"));
