'use strict';

/**
 * @namespace Page
 */

var server = require('server');
server.get('Show',function (req, res, next) {
res.render('training')
    next()
});


function getList(customerNo) {
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var AddressModel = require('*/cartridge/models/addressBook');
    var collections = require('*/cartridge/scripts/util/collections');

    var customer = CustomerMgr.getCustomerByCustomerNumber(customerNo);
    var rawAddressBook = customer.addressBook.getAddresses();
    var addressBook = collections.map(rawAddressBook, function (rawAddress) {
        var addressModel = new AddressModel(rawAddress);
        return addressModel;
    });
    return addressBook;
}

server.get('List',function (req, res, next) {
   var customerID = req.querystring.cuid;
    res.render('address',{addressBook: getList(customerID)});
    next();
});


module.exports = server.exports();