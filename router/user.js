const express = require("express");
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");

const userRouter = express.Router();

userRouter.use(auth);
userRouter.get("/users", userController.getAll);
userRouter.get("/users/:id", userController.get);
userRouter.post("/users", userController.create);
userRouter.put("/users/:id", userController.update);
userRouter.delete("/users/:id", userController.remove);

module.exports = userRouter;
