const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/:username", async (req, res) => {
  // const { username, password } = req.body;
  const { username } = req.params;
  console.log(username);
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({
        status: "fail",
        message: "No user found!",
      });
    }
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    console.log("Error fetching user", err);
  }
});

module.exports = router;
