const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/", (err) => {
  if (err) {
    console.log("error is ->", err);
  }

  console.log("database is connected to the server...");
});
