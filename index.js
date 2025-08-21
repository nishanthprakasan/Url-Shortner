const express = require("express");
const path = require("path");
const urlRouter = require("./routes/urlRouter");
const staticRouter = require("./routes/staticRouter");
const { connectMongoDb } = require("./connection");

const app = express();
const PORT = 8000;

//db connection
connectMongoDb("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Mongo DB connected.")
);

//server side rendering
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api", urlRouter);
app.use("/static", staticRouter);
app.get("/favicon.ico", (req, res) => res.status(204).end());

//listening to port
app.listen(PORT, () => console.log("Listening to port 8000."));
