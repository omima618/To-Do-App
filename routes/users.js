const express = require("express");
const router = express.Router();
const Users = require("../models/users");

const { createUser, login } = require("../controllers/users");

router.post("/", async (req, res, next) => {
  const newUser = req.body;
  await createUser(newUser)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.post("/login", async (req, res, next) => {
  const { name, password } = req.body;
  const user = await Users.findOne({ name }).select("-password").exec();

  try {
    if (user) {
      const token = await login({ name, password } , next);
      console.log(user, name, password, "inside");

      console.log("hhh", token);
      res.json({ token, user });
      console.log("done");
    }
  } catch (e) {
    console.log(e);

  }
});

module.exports = router;
