const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const PORT = 8000;

const app = express();

var MONGODB_URI = process.env.MONGODB_URL || "mongodb://localhost/workout";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});



app.use(require("./routes/api.js"));
app.use(require("./routes/display.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});