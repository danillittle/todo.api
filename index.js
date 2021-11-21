const app = require("./app");
require("dotenv").config();
require("./boot/database");

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
