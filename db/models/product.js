const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  price: Number,
  shipping: Number,
  shipping_estimate: Date,
  prime: Boolean,
  in_stock: Number,
  description: Array,
  photos: Array,
  rating: Number,
  review: Number,
});

const Product = mongoose.model('Product', productSchema);

function insertData(products) {
  return Product.insertMany(products);
}

function getProductById(id) {
  return Product.find({ id });
}

exports = {
  insertData,
  getProductById,
};
