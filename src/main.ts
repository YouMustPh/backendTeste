import express from "express";
import { route } from "./routes";
import bodyparser from "body-parser";
import { PrismaClient } from "@prisma/client";

require("dotenv").config({
  path: ".env",
});

const prisma = new PrismaClient();
prisma.$connect();

const app = express();

app.use(bodyparser.json());

app.use("/", route);

app.listen(Number(process.env.PORT || 3334), () => {
  console.log("Server is running on port 3334");
});
