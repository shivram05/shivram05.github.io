const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use("/css", express.static(path.join(__dirname, "styling")));

app.get("/", (req, res) => {
  const date = new Date();
  res.render("index", {
    pageTitle: "night",
    time: date.toTimeString(),
    hour: date.getHours() > 6 && date.getHours() < 18 ? "day" : "night",
  });
});

app.listen(3000);
