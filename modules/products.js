class Products {
  /**
   * Creates a new Products object
   * @param {WhmcsHttpClient} whmcsHttpClient 
   */
  constructor(whmcsHttpClient) {
    this.whmcsHttpClient = whmcsHttpClient;
  }

  /**
   * Adds a product to the system to be available for purchase.
   * https://developers.whmcs.com/api-reference/addproduct/
   * @param {Object} parameters Request parameters
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  addProduct(parameters, callback) {
    return this.whmcsHttpClient.callApi('AddProduct', parameters, callback);
  };

  /**
   * Adds a product to the system to be available for purchase.
   * https://developers.whmcs.com/api-reference/addproduct/
   * @param {Object} parameters Request parameters
   * @param {String} [parameters.pid] Obtain a specific product id configuration. Can be a list of ids comma separated
   * @param {String} [parameters.gid] Retrieve products in a specific group id
   * @param {String} [parameters.module] Retrieve products utilising a specific module
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  getProducts(parameters, callback) {
    return this.whmcsHttpClient.callApi('GetProducts', parameters, callback);
  };
}
module.exports = Products;
