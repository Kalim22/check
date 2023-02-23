const express = require("express");
const cors = require("cors");

require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.listen("9000", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("server is running...");
});
