const express = require("express");
const env = require("dotenv");
require("./src/db/conn");
const userRoute = require("./src/controller/user");
const productRoute = require("./src/controller/product");
env.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
