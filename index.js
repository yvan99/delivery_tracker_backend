const connectDB = require('./src/api/config/db');

const express = require("express");
const app = express();
connectDB();


app.listen(3000, () => {
  console.log("App listening on port 3000!");
}); 
