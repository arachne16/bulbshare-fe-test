const express = require("express");
const feedController = require("../controllers/feedController");

const Router = express.Router();

Router.route("/").get(feedController.getFeeds);

Router.route("/:id").get(feedController.getFeedById);

module.exports = Router;
