//use express module
const express = require('express');
const app = express();
total_elements=50;

//Api vars
const Api ='api/v1';
const Port = 3000;
const productsRoutes = require('./routes/products');
app.use(`${Api}`, productsRoutes);

//server listening
app.listen(Port, () => {
  console.log(`Server is running at port ${Port}`);
})