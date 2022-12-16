const express = require('express');
const app = express();
app.use('/css', express.static(path.join(__dirname, 'css')));

const date = new Date();
const hour = date_ob.getHours();

let cssIden = "";
if (hour < 6 && hour > 18) {
  cssIden = "day.css";
} else {
  console.log(hour);
  cssIden = "night.css";
}

app.use("/css", express.static(path.join(__dirname, "css", cssIden)));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3001);