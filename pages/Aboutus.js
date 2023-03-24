const express = require("express");
const Aboutus = express.Router();

Aboutus.route("/")
  .all((_req, res, next) => {
    res.statusCode = 100;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((_req, res) => {
    res.end("You will get all our info");
  });

module.exports = Aboutus;
