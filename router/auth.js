const express = require("express");
const authController = require("../controllers/authController");
const auth = require("../middlewares/auth");

const authRouter = express.Router();

authRouter.get("/auth/login", auth, authController.login);
authRouter.post("/auth/signin", authController.signin);
authRouter.post("/auth/signup", authController.signup);

module.exports = authRouter;
