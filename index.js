const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const { connectMongoDb } = require("./connection");
const {restrictToLoggedInUser} = require('./middlewares/auth')
const app = express();
const PORT = 8000;

const urlRouter = require("./routes/urlRouter");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/userRouter")

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
app.use(cookieParser());

//routes
app.use("/api", restrictToLoggedInUser, urlRouter);
app.use("/static", staticRouter);
app.use("/user", userRouter);
app.get("/favicon.ico", (req, res) => res.status(204).end());

//listening to port
app.listen(PORT, () => console.log("Listening to port 8000."));
