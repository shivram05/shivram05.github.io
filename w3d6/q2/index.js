const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: false }));
const userList = [];
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/result", (req, res, next) => {
  const obj = JSON.parse(JSON.stringify(req.body));
  // console.log(obj);
  userList.push(obj);

  res.render("result", { pageTitle: "userlist", userObj: userList });
  res.send(`<h1>${obj.fullName} is ${obj.age} years old.`);
});

app.listen(3000);
