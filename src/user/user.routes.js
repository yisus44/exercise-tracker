const { Router } = require("express");
const router = Router();

const {
  userSignUp,
  userSignIn,
  userLogWorkOut,
  userSignUpWithFullInfo,
  userGetInfo,
  userUpdateInfo,
  userGetReps,
} = require("./user.controller.js");

/////////////////////////
/////User related routes

//sign in and sign up
router.post("/signup", userSignUp);
router.post("/signIn", userSignIn);
router.post("/signup-full", userSignUpWithFullInfo);
//daily stuff
router.post("/user/log", userLogWorkOut);
//send data to visualize progress
router.get("/user", userGetInfo);
router.get("/user/workout", userGetReps);
module.exports = router;
