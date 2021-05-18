const express = require("express");
const app = express();

const userRoutes = require("./user/user.routes.js");

app.use(express.json());

app.use(userRoutes);

app.get("/", function (req, res) {
  res.send("Hola esquizo desde node ");
});

module.exports = app;
