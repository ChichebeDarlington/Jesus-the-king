import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// middlewares import goes here
import errorHandlingMiddleware from "./middleware/error-handling.js";
import middlewareNotFound from "./middleware/not-found.js";
import dataBase from "./database/database.js";

app.get("/", (req, res) => {
  res.send("Welcome!");
});

// middlewares functions
app.use(middlewareNotFound);
app.use(errorHandlingMiddleware);

const port = process.env.PORT || 9000;

const runStart = async () => {
  try {
    await dataBase(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

runStart();
