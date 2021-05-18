const bcrypt = require("bcrypt");
const User = require("./user.model");

async function userSignUp(req, res) {
  try {
    const { username, password, email } = req.body;
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
    const userRecived = await User.find({ email });
    if (!userRecived) {
      res
        .send({ error: "We could not find what you are looking for..." })
        .status(400);
    }

    const match = await bcrypt.compare(password, userRecived[0].password);
    if (!match) {
      res.send({ error: "Something went wrong..." }).status(400);
    }

    res.send({ userRecived });
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  userSignUp,
  userSignIn,
};
