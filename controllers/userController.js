const User = require("../models/User");

module.exports = {
  getAll: (req, res) => {
    const { query } = req;

    User.find(query, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  get: (req, res) => {
    const { params } = req;

    User.findOne({ _id: params.id }, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  create: (req, res) => {
    const { body } = req;

    User.create(body, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  update: (req, res) => {
    const { body, params } = req;

    User.updateOne({ _id: params.id }, body, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },

  remove: (req, res) => {
    const { params } = req;

    User.deleteOne({ _id: params.id }, (err, result) => {
      if (err) res.status(400).send(err);
      res.send(result);
    });
  },
};
