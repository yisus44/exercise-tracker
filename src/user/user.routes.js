const { Router } = require("express");
const router = Router();

const {
  userSignUp,
  userSignIn,
  userLogWorkOut,
  userSignUpWithFullInfo,
} = require("./user.controller.js");

router.post("/signup", userSignUp);
router.post("/signIn", userSignIn);
router.post("/signup-full", userSignUpWithFullInfo);
router.post("/logworkout", userLogWorkOut);

module.exports = router;
