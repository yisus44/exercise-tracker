const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: { type: String, required: true },
  email: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
