const express = require("express");
const menu = express.Router();

menu
  .route("/")
  .all((_req, res, next) => {
    res.statusCode = 100;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((_req, res) => {
    res.end("You will get all our menu");
  });

module.exports = menu;
