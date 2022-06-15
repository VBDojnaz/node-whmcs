class Authentication {
  /**
   * Creates a new Authentication object
   * @param {WhmcsHttpClient} whmcsHttpClient 
   */
  constructor(whmcsHttpClient) {
    this.whmcsHttpClient = whmcsHttpClient;
  }

  /**
   * Create an OAuth Credential
   * https://developers.whmcs.com/api-reference/createoauthcredential/
   * @param {Object} parameters Request parameters
   * 
   * @param {'authorization_code'||'single_sign_on'} parameters.grantType
   * @param {String} parameters.scope A space separated list of valid scopes from tbloauthserver_scopes
   * @param {String} [parameters.name] The name to give the oAuth Credential for the authorization_code $grantType
   * @param {String} [parameters.serviceId] The id of the service for the single_sign_on $grantType
   * @param {Number} [parameters.description] The description of the OAuth Credential
   * @param {String} [parameters.logoUri] URL or Path Relative to the Base WHMCS Client Area Directory to a logo image file for this application.
   * @param {String} [parameters.redirectUri] Authorised Redirect URIs
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  createOAuthCredential(parameters, callback) {
    return this.whmcsHttpClient.callApi('CreateOAuthCredential', parameters, callback);
  };

  /**
   * Create a single use, client or user single sign-on access token.
   * https://developers.whmcs.com/api-reference/createssotoken/
   * @param {Object} parameters Request parameters
   * 
   * @param {Number} [parameters.client_id] The id of the client that should be authenticated by the resulting token
   * @param {Number} [parameters.user_id] The id of the user that should be authenticated by the resulting token. If not provided, the owner of the requested client will be assumed.
   * @param {String} [parameters.destination] A single valid destination. If not provided, the destination will be the clientarea homepage
   * @param {Number} [parameters.service_id] The id of the service for respective clientarea $destination
   * @param {Number} [parameters.domain_id] The id of the service for respective clientarea $destination
   * @param {String} [parameters.sso_redirect_path] Custom relative path for redirection after authentication when using sso:custom_redirect destination
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  createSsoToken(parameters, callback) {
    return this.whmcsHttpClient.callApi('CreateSsoToken', parameters, callback);
  };

  /**
   * Removes OAuth Credential record. This action cannot be undone.
   * https://developers.whmcs.com/api-reference/deleteoauthcredential/
   * @param {Object} parameters Request parameters
   * 
   * @param {Number} parameters.credentialId The credential id to be deleted
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  deleteOAuthCredential(parameters, callback) {
    return this.whmcsHttpClient.callApi('DeleteOAuthCredential', parameters, callback);
  };

  /**
   * List OAuth Credentials matching passed criteria.
   * https://developers.whmcs.com/api-reference/listoauthcredentials/
   * @param {Object} parameters Request parameters
   * 
   * @param {String} [parameters.grantType] Find credentials for a specific grant type
   * @param {String} [parameters.sortField] Sort the response using the passed field
   * @param {String} [parameters.sortOrder] The direction of the sort order (‘ASC’, ‘DESC’)
   * @param {Number} [parameters.limit] To limit the number of returned credentials
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  listOAuthCredentials(parameters, callback) {
    return this.whmcsHttpClient.callApi('ListOAuthCredentials', parameters, callback);
  };

  /**
   * Updates a given OAuth API Client Credential.
   * https://developers.whmcs.com/api-reference/updateoauthcredential/
   * @param {Object} parameters Request parameters
   * 
   * @param {Number} parameters.credentialId The auto increment ID of the credential set to be updated
   * @param {String} [parameters.clientApiIdentifier] The OAuth API Client Credential Unique Identifier (Client ID) to be updated. Only required if credentialId is not known/passed.
   * @param {String} [parameters.name] The name to assign
   * @param {String} [parameters.description] The description to assign
   * @param {String} [parameters.grantType] The grant type for which the credential set is valid for. Possible values include: authorization_code or single_sign_on
   * @param {String} [parameters.scope] A space delimited list of the scopes for which the credential set is valid. See CreateOAuthCredential for permitted values
   * @param {Number} [parameters.serviceId] The service ID for which the credential relates to
   * @param {String[]} [parameters.logoUri] The logoUri to assign
   * @param {String} [parameters.redirectUri] An array of Authorized Redirect URIs
   * @param {Boolean} [parameters.resetSecret] Set to true to reset the OAuth API Client Credential Secret
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  updateOAuthCredential(parameters, callback) {
    return this.whmcsHttpClient.callApi('UpdateOAuthCredential', parameters, callback);
  };

  /**
   * Validate user login credentials.
   * https://developers.whmcs.com/api-reference/validatelogin/
   * @param {Object} parameters Request parameters
   * 
   * @param {String} parameters.email
   * @param {String} parameters.password2
   * 
   * @param {Function} callback Optional callback. If not set the method returns a Promise
   */
  validateLogin(parameters, callback) {
    return this.whmcsHttpClient.callApi('ValidateLogin', parameters, callback);
  };

}

module.exports = Authentication;
