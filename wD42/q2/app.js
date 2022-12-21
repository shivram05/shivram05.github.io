const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use("/folder", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

const ball8 = [
  "It is Certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/8ball", (req, res) => {
  const ans = req.query.ans;
  let resData = ball8[Math.floor(Math.random() * (ball8.length - 1))];
  console.log(resData);
  res.send({ resData: resData });
});
app.listen(3000);
