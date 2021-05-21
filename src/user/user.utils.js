const User = require("./user.model");

/*Function to know if the the reps of last workout was the best */
async function shouldUpdateReps(exercises, user) {
  if (exercises.length === 3) {
    //exercises should arrive as chin ups, push ups and squats
    let response = {
      shouldChinUps: false,
      shouldPushUps: false,
      shouldSquats: false,
    };
    if (exercises[0] > user.lastChinUps) {
      response.shouldChinUps = true;
    }
    if (exercises[1] > user.lastPushUps) {
      response.shouldPushUps = true;
    }
    if (exercises[2] > user.lastSquats) {
      response.shouldSquats = true;
    }
    return response;
  } else {
    throw new Error("Insuficient data");
  }
}

module.exports = { shouldUpdateReps };
