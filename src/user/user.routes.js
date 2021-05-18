const { Router } = require("express");
const router = Router();
const { userSignUp, userSignIn } = require("./user.controller.js");

router.post("/signup", userSignUp);
router.post("/signIn", userSignIn);

module.exports = router;
