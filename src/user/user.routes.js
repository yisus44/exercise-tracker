const { Router } = require("express");
const router = Router();
const {
  userSignUp,
  userSignIn,
  userLogWorkOut,
} = require("./user.controller.js");

router.post("/signup", userSignUp);
router.post("/signIn", userSignIn);
router.post("/logworkout", userLogWorkOut);

module.exports = router;
