const mongoose = require("mongoose");

const mongoDBURI =
  process.env.MONGODB_URI || "mongodb://localhost/exercise-tracker";
mongoose.connect(mongoDBURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", function () {
  console.log("Database up and running");
});
