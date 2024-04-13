require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const feedRouter = require("./Router/feedRouter");
const commentsRouter = require("./Router/commentsRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "assets")));

// app.use("/api/v1/feeds", feedRouter);
app.use("/api/v1/feeds", feedRouter);
app.use("/api/v1/comments", commentsRouter);

app.listen(4000, function (err) {
  if (err) return err;
  console.log("(HTTP) App now running on port", 4000);
});
