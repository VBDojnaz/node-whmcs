class Affiliates {
  /**
   * Creates a new Affiliates object
   * @param {WhmcsHttpClient} whmcsHttpClient 
   */
  constructor(whmcsHttpClient) {
    this.whmcsHttpClient = whmcsHttpClient;
  }

  /**
   * Activate affiliate referrals for a client.
   * https://developers.whmcs.com/api-reference/affiliateactivate/
   * @param {Object} parameters Request parameters
   * 
   * @param {Number} userid The client ID to activate affiliate status for
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  affiliateActivate(parameters, callback) {
    return this.whmcsHttpClient.callApi('AffiliateActivate', parameters, callback);
  };

  /**
   * Obtain an array of affiliates
   * https://developers.whmcs.com/api-reference/getaffiliates/
   * @param {Object} parameters Request parameters
   * 
   * @param {Number} [parameters.limitstart] The offset for the returned affiliate data (default: 0)
   * @param {Number} [parameters.limitnum] The number of records to return (default: 25)
   * @param {Number} [parameters.userid] Obtain affiliate data for a specific client account
   * @param {Number} [parameters.visitors] Provide affiliates that match a specific visitor count
   * @param {'percentage'||'fixedamount'} [parameters.paytype] Provide affiliates matching the paytype provided
   * @param {Number} [parameters.payamount] Provide affiliates matching a specific overridden payout amount
   * @param {Number} [parameters.onetime] Provide affiliates configured to receive one time affiliates
   * @param {Number} [parameters.balance] Provide affiliates that have this balance
   * @param {Number} [parameters.withdrawn] Provide affiliates that have withdrawn this amount
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  getAffiliates(parameters, callback) {
    return this.whmcsHttpClient.callApi('GetAffiliates', parameters, callback);
  };
}

module.exports = Affiliates;
