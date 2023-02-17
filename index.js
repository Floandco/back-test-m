const express = require("express");
const { format } = require("path");
const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)


app.listen(process.env.PORT, () => {
  console.log("Server is started 🚀 ");
});
