import express from "express";

export const mainRouter = express.Router();

mainRouter.get("/", (req, res) => {
  res.json({
    title: "Hello World",
  });
});
