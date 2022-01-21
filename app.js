const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use(router);

module.exports = app;
