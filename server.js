const express = require("express");
const cors = require("cors");

require("./db");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/use", (req, res) => {
  return res.send("use api");
});

app.get("/data-save/:name", (req, res) => {
  let a = req.params.name;
  return res.send(`hello ${a}`);
});

app.post("/post", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;

  return res
    .status(200)
    .json({ msg: `hello world ${req.body.name} and ${req.body.age}` });
});

app.listen("9000", (err) => {
  if (err) {
    console.log(err);
  }

  console.log("server is running...");
});
