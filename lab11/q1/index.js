const express = require('express');
const app = express();
app.get('/:age', (req, res) => {
 let name = req.query.name;
 let ageVariable = req.params.age;
 if (!name) {
 name = "shivram shrestha";
 }

 res.send(`Welcome ${name} and your age is ${ageVariable}`);
});
app.listen(3001);
