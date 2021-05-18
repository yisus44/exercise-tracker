const app = require("./app.js");
require("./database.js");
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server up and running");
});
