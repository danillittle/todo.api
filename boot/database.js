const mongoose = require("mongoose");
const path = require("path");

const credentials = path.join(process.env.MONGO_CERT);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI, {
  sslKey: credentials,
  sslCert: credentials,
  useNewUrlParser: true,
});

module.exports = mongoose.connection;
