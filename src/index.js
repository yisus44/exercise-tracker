require("dotenv").config();
require("./database.js");
const app = require("./app.js");
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server up and running");
});
