var RippleRestClient = require('ripple-rest-client');
var config = require(__dirname+'/../../config/environment.js');

/**
 * @requires trust, config
 * @function setTrustLine
 * @description Sets trust line between the cold wallet and the hot wallet.
 * @param {String} currency
 * @param {Number} amount
 * @param {Callback} callback
 */

function setTrustLine(options, callback) {
  var hotWallet = config.get('HOT_WALLET');
  var coldWallet = config.get('COLD_WALLET');

  var rippleRestClient = new RippleRestClient({
    api: config.get('RIPPLE_REST_API'),
    account: hotWallet.address
  });

  rippleRestClient.setTrustLines({
    account: hotWallet.address,
    secret: hotWallet.secret,
    limit: options.amount,
    currency: options.currency,
    counterparty: coldWallet
  }, callback);

}

module.exports = setTrustLine;

