const jwt = require("jsonwebtoken");
const User = require("../models/User");
const userController = require("./userController");

module.exports = {
  login: (req, res) => {
    res.send(req.auth);
  },

  signin: async (req, res) => {
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username: username });
      if (user) {
        user.comparePassword(password, async (err, isMatch) => {
          if (isMatch) {
            const token = await jwt.sign(
              { username: user.username },
              process.env.JWT_SECRET
            );
            res.json({ token });
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        });
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  signup: (req, res) => {
    userController.create(req, res);
  },
};
