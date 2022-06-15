class Addons {
  /**
   * Creates a new Addons object
   * @param {WhmcsHttpClient} whmcsHttpClient 
   */
  constructor(whmcsHttpClient) {
    this.whmcsHttpClient = whmcsHttpClient;
  }

  /**
   * Updates a Client Addon.
   * https://developers.whmcs.com/api-reference/updateclientaddon/
   * @param {Object} parameters Request parameters
   * 
   * @param {Number} parameters.id The ID of the client addon to update
   * @param {String} [parameters.status] The status to change the addon to
   * @param {Number} [parameters.addonid] The configured addon ID to update the client addon to
   * @param {String} [parameters.name] The custom name to apply to the addon
   * @param {Number} [parameters.setupfee] The setup fee for the client addon
   * @param {Number} [parameters.recurring] The setup fee for the client addon
   * @param {String} [parameters.billingcycle] The billing cycle for the addon
   * @param {String} [parameters.nextduedate] The next due date for the addon. Format: Y-m-d
   * @param {String} [parameters.terminationdate] The termination date of the addon. Format: Y-m-d
   * @param {String} [parameters.notes] The admin notes to associate with the addon
   * @param {Boolean} [autorecalc] Whether to automatically recalculate the recurring amount of the addon (this will ignore any passed $recurring)
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  updateClientAddon(parameters, callback) {
    return this.whmcsHttpClient.callApi('UpdateClientAddon', parameters, callback);
  };
}

module.exports = Addons;
