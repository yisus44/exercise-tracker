const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
  duration: {
    type: Number,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;
