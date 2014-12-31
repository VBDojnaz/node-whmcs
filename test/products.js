var assert = require('assert'),
  expect = require('chai').expect,
  client = require('./spec_helper').client;


describe('products', function() {

  it('should get product', function(done) {
    this.timeout(15000);

    client.products.getProduct(1, function(err, customer) {
      expect(err).to.be.null;

      done();
    });
  });

  it('should get products', function(done) {
    this.timeout(15000);

    client.products.getProducts(1, function(err, customer) {
      expect(err).to.be.null;

      done();
    });
  });

});
