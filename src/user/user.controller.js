const bcrypt = require("bcrypt");
const User = require("./user.model");
const validator = require("validator");
const { shouldUpdateReps } = require("./user.utils.js");

async function userSignUp(req, res) {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      username,
      password: hashedPassword,
      email,
    });

    if (!validator.isEmail(email)) {
      throw new Error("Invalid data.");
    }
    await newUser.save();
    res.send({ newUser });
  } catch (err) {
    console.log(err);
    res.send({ error: "Something went wrong" });
  }
}

async function userSignUpWithFullInfo(req, res) {
  const {
    username,
    password,
    email,
    weigth,
    heigth,
    bodyFat,
    activityLevel,
    maxChinUps,
    maxPushUps,
    maxSquats,
    lastChinUps,
    lastPushUps,
    lastSquats,
  } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!validator.isEmail(email)) {
      throw new Error("Invalid data.");
    }
    const newUser = await new User({
      username,
      password: hashedPassword,
      email,
      weigth,
      heigth,
      bodyFat,
      activityLevel,
      maxChinUps,
      maxPushUps,
      maxSquats,
      lastChinUps,
      lastPushUps,
      lastSquats,
    });
    await newUser.save();
    res.send({ newUser });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}

async function userSignIn(req, res) {
  const { email, password } = req.body;
  try {
    const userReceived = await User.find({ email });
    if (!userReceived) {
      res
        .send({ error: "We could not find what you are looking for..." })
        .status(400);
    }
    const match = await bcrypt.compare(password, userReceived[0].password);
    if (!match) {
      res.send({ error: "Something went wrong..." }).status(400);
    }
    res.send({ userReceived });
  } catch (err) {
    console.log(err);
  }
}

async function userLogWorkOut(req, res) {
  const { chinUps, pushUps, squats, email } = req.body;
  try {
    shouldUpdateReps([chinUps, pushUps, squats]);
    res.send({});
  } catch (err) {
    console.log(err);
  }
}
async function userUpdateInfo(req, res) {}
async function userGetInfo(req, res) {}
async function userGetReps(req, res) {}

module.exports = {
  userSignUp,
  userSignIn,
  userLogWorkOut,
  userSignUpWithFullInfo,
  userGetInfo,
  userGetReps,
  userUpdateInfo,
};
