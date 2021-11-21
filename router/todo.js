const express = require("express");
const todoController = require("../controllers/todoController");
const auth = require("../middlewares/auth");

const todoRouter = express.Router();

todoRouter.use(auth);
todoRouter.get("/todos", todoController.getAll);
todoRouter.get("/todos/:id", todoController.get);
todoRouter.post("/todos", todoController.create);
todoRouter.put("/todos/:id", todoController.update);
todoRouter.delete("/todos/:id", todoController.remove);

module.exports = todoRouter;
