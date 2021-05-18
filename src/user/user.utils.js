const User = require("./user.model");

/*Function to know if the the reps of last workout was the best */
async function shouldUpdateReps(exercise, reps) {
  User.find({});
  return 0;
}

module.exports = { shouldUpdateReps };
