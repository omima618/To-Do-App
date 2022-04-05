const jwt = require("jsonwebtoken");
const Users = require("../models/users");

const createUser = (query) => Users.create(query);
const login = async ({ name, password }, next) => {
  const user = await Users.findOne({ name });
  console.log(user);

  const verified = await user.comparePassword(password);
  console.log(user, verified);
  if (!user || !verified) {
    console.log("username or password incorrect !");
    return;
  }
  if (user && verified) {
    console.log("login success");
    return jwt.sign(
      {
        name,
        id: user._id,
        maxAge: "2d",
      },
      "herewetypeanylongstring"
    ); // here we type any long string
  }
};

module.exports = {
  createUser,
  login,
};
