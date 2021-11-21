const express = require("express");
const authRouter = require("./auth");
const userRouter = require("./user");
const todoRouter = require("./todo");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.use("/api", authRouter);
router.use("/api", userRouter);
router.use("/api", todoRouter);

module.exports = router;
