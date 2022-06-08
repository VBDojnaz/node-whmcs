const WhmcsHttpClient = require('./lib/whmcshttpclient');
const modules = require('./modules/index');

class WHMCS {
  /** @type {import('./modules/orders')}*/ orders;
  /** @type {import('./modules/billing')}*/ billing;
  /** @type {import('./modules/module')}*/ module;
  /** @type {import('./modules/support')}*/ support;
  /** @type {import('./modules/system')}*/ system;
  /** @type {import('./modules/client')}*/ client;
  /** @type {import('./modules/products')}*/ products;
  /** @type {import('./modules/projectManagement')}*/ projectManagement;
  /** @type {import('./modules/users')}*/ users;
  /** @type {import('./modules/affiliates')}*/ affiliates;
  /** @type {import('./modules/authentication')}*/ authentication;
  /** @type {import('./modules/domains')}*/ domains;
  /** @type {import('./modules/servers')}*/ servers;
  /** @type {import('./modules/tickets')}*/ tickets;
  /** @type {import('./modules/service')}*/ service;
  /** @type {import('./modules/addons')}*/ addons;

  /**
   * Creates a WHMCS object
   * @param {Object} options Configuration parameters (key-value pairs)
   */
  constructor(options) {
    this.whmcsHttpClient = new WhmcsHttpClient(options);

    this.orders = new modules.Orders(this.whmcsHttpClient);
    this.billing = new modules.Billing(this.whmcsHttpClient);
    this.module = new modules.Module(this.whmcsHttpClient);
    this.support = new modules.Support(this.whmcsHttpClient);
    this.system = new modules.System(this.whmcsHttpClient);
    this.client = new modules.Client(this.whmcsHttpClient);
    this.products = new modules.Products(this.whmcsHttpClient);
    this.projectManagement = new modules.ProjectManagement(this.whmcsHttpClient);
    this.users = new modules.Users(this.whmcsHttpClient);
    this.affiliates = new modules.Affiliates(this.whmcsHttpClient);
    this.authentication = new modules.Authentication(this.whmcsHttpClient);
    this.domains = new modules.Domains(this.whmcsHttpClient);
    this.servers = new modules.Servers(this.whmcsHttpClient);
    this.tickets = new modules.Tickets(this.whmcsHttpClient);
    this.service = new modules.Service(this.whmcsHttpClient);
    this.addons = new modules.Addons(this.whmcsHttpClient);
  }

  /**
   * Executes an action in WHMCS. You can use this to execute an action that is not defined in the pre-loaded modules.
   * @param {String} action Command name
   * @param {Object} parameters Request parameters (key-value pairs)
   * @param {Function} callback Optional callback. If not set the method returns a Promise.
   */
  callApi(action, parameters, callback) {
    return this.whmcsHttpClient.callApi(action, parameters, callback);
  };
}

module.exports = WHMCS;
