const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/verifyToken");

//Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then(async (hash) => {
    const user = new User({ username, password: hash });
    await user.save();
    res.json(user);
  });
});

//Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const { id } = user;

  if (!user) {
    res.json({ message: "User doesnt exist" });
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (match) {
        const token = jwt.sign({ user }, "secretkey");
        res.cookie("token", token, {
          maxAge: 604800000,
          httpOnly: true,
        });
        res.json({ accessToken: token, username, id });
      } else {
        res.json({ message: "wrong password or username" });
      }
    });
  }
});
router.get("/logout", async (req, res) => {
  res.cookie("token", "invalidToken", {
    maxAge: 0,
    httpOnly: true,
  });
  res.json("done");
});
//is user logged
router.get("/verify", verifyToken, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
