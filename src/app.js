const express = require("express");
const app = express();

const userRoutes = require("./user/user.routes.js");
const cors = require("cors");

if ((process.env.NODE_ENV = "development")) {
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
} else {
  app.use(cors({ credentials: true }));
}

app.use(express.json());

app.use(userRoutes);

app.get("/", function (req, res) {
  res.send("Hola esquizo desde node ");
});

module.exports = app;
