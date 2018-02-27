const mongoose = require('mongoose');
const Product = require('../db/models/product');

mongoose.connect('mongodb://localhost/productDetails');

describe('Tests for database', () => {
  it('should be able to retrieve existing dummy data', () => {
    Product.getAllProducts()
      .then((results) => {
        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBeGreaterThan(0);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  it('should retrieve product given an id', () => {
    Product.getProductById(1)
      .then((product) => {
        expect(product).toHaveProperty('id', 1);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  it('retrieved data should have correct properties', () => {
    Product.getProductById(1)
      .then((product) => {
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('shipping');
        expect(product).toHaveProperty('shipping_estimate');
        expect(product).toHaveProperty('prime');
        expect(product).toHaveProperty('in_stock');
        expect(product).toHaveProperty('descriptions');
        expect(product).toHaveProperty('image_url');
        expect(product).toHaveProperty('rating');
        expect(product).toHaveProperty('review');
      })
      .catch((e) => {
        console.log(e);
      });
  });
});
