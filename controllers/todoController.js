const fs = require("fs");
const Todo = require("../models/Todo");

module.exports = {
  getAll: (req, res) => {
    const { query } = req;

    Todo.find(query, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  get: (req, res) => {
    const { params } = req;

    Todo.findOne({ _id: params.id }, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  create: (req, res) => {
    const { body, file } = req;

    const todo = {
      ...body,
      image: file.path,
      createdBy: req.auth._id,
    };

    Todo.create(todo, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  update: (req, res) => {
    const { body, params, file } = req;

    console.log(file);

    const todo = {
      ...body,
      image: file.path,
      createdBy: req.auth._id,
    };

    Todo.updateOne({ _id: params.id }, todo, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  remove: (req, res) => {
    const { params } = req;

    Todo.deleteOne({ _id: params.id }, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },
};
