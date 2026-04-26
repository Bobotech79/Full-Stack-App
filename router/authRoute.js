const express = require("express");
const jwt = require("jsonwebtoken");
const routes = express.Router();
const User = require("../model/User");

const JWT_SECRET = "DSA@4dsb!";

routes.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username and password are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    return res.status(error);
  }
});

routes.post("/auth", async (req, res) => {
  console.log('You are Authenticated..');
});


routes.post("/register", async (req, res) => {
  console.log('You have Register..');
});

module.exports = router;