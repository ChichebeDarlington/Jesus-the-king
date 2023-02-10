import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// database
import dataBase from "./database/database.js";

// Routers
import routerAuth from "./routes/routerAuth.js";
import routerJob from "./routes/routerJobs.js";

// middle-ware import goes here
import errorHandlingMiddleware from "./middleware/error-handling.js";
import middlewareNotFound from "./middleware/not-found.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use("/api/v1/authenticate", routerAuth);
app.use("/api/v1/jobs", routerJob);

// middle-wares functions
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
