'use strict';

var server = require('server');
server.get('Show', function (req, res, next) {
    var customerID = req.querystring.cuid;
    var addressBook;
    if (customerID) {
        addressBook = getList(customerID);
    } else {
        errorID = 'there is no customerID'
    }
    res.render('address', {
        addressBook: addressBook, errorMsg: errorMsg
        , errorID: errorID, errorAccount: errorAccount
    });
    next();
});

var errorAccount;
var errorMsg;
var errorID;
function getList(customerNo) {
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var AddressModel = require('*/cartridge/models/addressBook');
    var collections = require('*/cartridge/scripts/util/collections');

    var customer = CustomerMgr.getCustomerByCustomerNumber(customerNo);
    if (!empty(customer)) {
        var rawAddressBook = customer.addressBook.getAddresses();
        if (!empty(rawAddressBook)) {
            var addressBook = collections.map(rawAddressBook, function (rawAddress) {
                var addressModel = new AddressModel(rawAddress);
                return addressModel;
            });
        }
        else {
            errorAccount = 'Address is not available for this customer';
        }
    }
    else {
        errorMsg = 'there is no customer'
    }
    return addressBook;
}
module.exports = server.exports();