const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../model/User");

const JWT_SECRET = "DSA@4dsb!";

router.post("/login", async (req, res) => {

});


router.post("/register", async (req, res) => {

});

module.exports = router;