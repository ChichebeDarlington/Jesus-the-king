import express from "express";
import middlewareNotFound from "./middleware/not-found.js";

const app = express();

// middlewares goes here

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.use(middlewareNotFound);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`));
