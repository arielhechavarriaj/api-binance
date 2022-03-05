//use express module
const express = require('express');
const app = express();
const fs = require("fs");



app.get(`/binance`, function (req, res) {
  fs.readFile( __dirname + "/" + "binance.json", 'utf8', function (err, data) {
      res.status(200).send(data);
  });
})

//server listening
app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
})
