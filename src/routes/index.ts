import express from "express";
import { mainRouter } from "./mainRoute";
import { userRouter } from "./userRoute";

export const route = express.Router();

route.use("/", mainRouter);
route.use("/users", userRouter);
