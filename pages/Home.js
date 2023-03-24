const express = require("express");
const Home = express.Router();

Home.route("/")
  .all((_req, res, next) => {
    res.statusCode = 100;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((_req, res) => {
    res.end("my homepage");
  })
  .post((req, res) => {
    res.end(`My home page`);
  });

module.exports = Home;
