import express from "express";

import mongoose from "mongoose";

import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { errorHandler } from "./utils/error.js";

dotenv.config({ path: "../.env" });

const app = express();

app.use(express.json());



app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

/* Middleware to handle possible errors */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

app.listen(3000, () => console.log("Listening in PORT: 3000 !!!"));
