'use strict'
var server = require('server');

server.get('Show', function (req, res, next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var customObject = CustomObjectMgr.getAllCustomObjects('wishList');
    var allCustomObject = customObject.asList().toArray();
    var email;
    if (customer.authenticated) {
        email = req.currentCustomer.raw.profile.email;
    } else {
        email = req.remoteAddress;
    }
    var customObjectKey;
    var product;
    for (var i = 0; i < allCustomObject.length; i++) {
        var element = allCustomObject[i];
        customObjectKey = element.custom.wishList;
        if (customObjectKey == email) {
            product = element.custom.productID.split(',');
        }
    }
    // allCustomObject.forEach(element => {
    //     customObjectKey=element.custom.wishList;
    //     if(customObjectKey==email){
    //          product=element.custom.productID.split(',');
    //     }
    // });

    res.render('wishListProduct', { product: product })
    next();
})

server.get('Remove', function (req, res, next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var customObject = CustomObjectMgr.getAllCustomObjects('wishList');
    var allCustomObject = customObject.asList().toArray();
    var email;
    var pid = req.querystring.pid;
    if (customer.authenticated) {
        email = req.currentCustomer.raw.profile.email;
    } else {
        email = req.remoteAddress;
    }
    var customObjectKey;
    var product;
    for (var i = 0; i < allCustomObject.length; i++) {
        var element = allCustomObject[i];
        customObjectKey = element.custom.wishList;
        if (customObjectKey == email) {
            product = element.custom.productID.split(',');
            for (var j = 0; j < product.length; j++) {
                var item = product[j];
                if (item == pid) {
                    var removeProduct = product.indexOf(item);
                    product.splice(removeProduct, 1);
                    Transaction.wrap(function () {
                        element.custom.productID = product.toString();
                    });
                    res.render('home/homePage');
                }
            }
        }

    }


    next();
})

module.exports = server.exports();