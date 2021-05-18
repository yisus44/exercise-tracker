const bcrypt = require("bcrypt");
const User = require("./user.model");

const { shouldUpdateReps } = require("./utils");

async function userSignUp(req, res) {
  const { username, password, email } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      username,
      password: hashedPassword,
      email,
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

async function userLogWorkOut(req, res) {}

module.exports = {
  userSignUp,
  userSignIn,
  userLogWorkOut,
};
