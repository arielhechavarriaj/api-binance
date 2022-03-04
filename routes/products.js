
const express = require('express');
const router = express.Router();

router.get(`/`, async (req, res) =>{
  if(!productList) {
        res.status(500).json({success: false})
    } 
    res.status(200).send(productList);

})


module.exports =router;