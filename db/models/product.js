const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  brand: String,
  price: Number,
  shipping: Number,
  prime: Boolean,
  in_stock: Number,
  descriptions: [String],
  image_url: [String],
  rating: Number,
  review: Number,
});

const Product = mongoose.model('Product', productSchema);

function insertData(products) {
  return Product.insertMany(products);
}

function getAllProducts() {
  return Product.find();
}

function getProductById(id) {
  return Product.findOne({ id });
}

module.exports = {
  insertData,
  getProductById,
  getAllProducts,
};
