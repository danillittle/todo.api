const express = require("express");
const multer = require("multer");
const todoController = require("../controllers/todoController");
const auth = require("../middlewares/auth");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
const todoRouter = express.Router();

todoRouter.use(auth);
todoRouter.get("/todos", todoController.getAll);
todoRouter.get("/todos/:id", todoController.get);
todoRouter.post("/todos", upload.single("image"), todoController.create);
todoRouter.put("/todos/:id", upload.single("image"), todoController.update);
todoRouter.delete("/todos/:id", todoController.remove);

module.exports = todoRouter;
