const express = require("express");
const commentsController = require("../controllers/commentsController");

const Router = express.Router();

Router.route("/").get(commentsController.getComments);

module.exports = Router;
