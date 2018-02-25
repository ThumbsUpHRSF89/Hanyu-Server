const mongoose = require('mongoose');
const Product = require('./models/product');
const data = require('./dummyData');

mongoose.connect('mongodb://localhost/productDetails');

Product.insertData(data)
  .then(() => {
    console.log('Insert Data Success!');
    mongoose.disconnect();
  })
  .catch((e) => {
    console.error(e);
    mongoose.disconnect();
  });
