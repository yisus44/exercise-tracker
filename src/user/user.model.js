const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, default: "User", minLength: 4 },
  password: { type: String, required: true, minLength: 8, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  weigth: { type: Number, min: 1 },
  heigth: { type: Number, min: 1 },
  bodyFat: { type: Number, min: 1 },
  activityLevel: { type: String, trim: true, lowercase: true },
  maxChinUps: { type: Number },
  maxPushUps: { type: Number },
  maxSquats: { type: Number },
  lastChinUps: { type: Number },
  lastPushUps: { type: Number },
  lastSquats: { type: Number },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
