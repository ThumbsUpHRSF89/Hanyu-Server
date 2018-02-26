const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Product = require('../db/models/product');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/productDetails');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/product/:id', (req, res) => {
  console.log('Serving GET request on url /product');
  const { id } = req.params;
  Product.getProductById(id)
    .then(result => res.json(result));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
