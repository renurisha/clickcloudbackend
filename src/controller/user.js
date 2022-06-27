const express = require("express");
const User = require("../model/user");
const router = express.Router();
router.get("", (req, res) => {
  return res.status(201).send("hello user...");
});
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  const createduser = await user.save();
  res
    .status(201)
    .send({ message: "user created successfully", user: createduser });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user.password == req.body.password) {
    return res.status(201).send({ message: "user login successfully" });
  } else {
    return res.status(401).send({ message: "invalid user" });
  }

  res
    .status(201)
    .send({ message: "user created successfully", user: createduser });
});
router.post("/getUser", async (req, res) => {
  const user = await User.find();
  //const createduser = await user.save();
  res.status(201).send({ message: "user find successfully", user: user });
});
module.exports = router;
