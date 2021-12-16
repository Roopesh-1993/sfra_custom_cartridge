var server = require('server');
server.extend(module.superModule);

server.append('Show', function (req, res, next) {
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var data = res.getViewData();
    var productid = data.product.id;
    var profile = req.currentCustomer.profile;
    if (profile) {
        var currentProfile = CustomerMgr.getProfile(profile.customerNo);
        var customAttribute = currentProfile.custom.listOfProductsViewed;
        var Transaction = require('dw/system/Transaction');
        if (!empty(customAttribute)) {
            var productsViewed = [];
            productsViewed = [productid];
            productsViewed.push(customAttribute);
            var productID = productsViewed.toString();
            var products = productID.split(',');
            var uniqueProduct = products.filter(function (item, pos) {
                return products.indexOf(item) == pos;
            });
            Transaction.wrap(function () {
                currentProfile.custom.listOfProductsViewed = uniqueProduct.toString();
            });
        }
        else {
            Transaction.wrap(function () {
                currentProfile.custom.listOfProductsViewed = productid;
            });
        }
    }
    next();
});


server.get('RecentView', function (req, res, next) {
    var CustomerMgr = require('dw/customer/CustomerMgr');
    var profile = req.currentCustomer.profile;
    if (profile) {
        var currentProfile = CustomerMgr.getProfile(profile.customerNo);
        if(!empty(currentProfile)){
            var ProductIDs = currentProfile.custom.listOfProductsViewed;

        }
        if (ProductIDs) {
            var splitProduct = ProductIDs.split(',');
        }
    }
    res.render('home/homeRecent', { ProductIDs: ProductIDs, splitProduct: splitProduct });
    next();
});

module.exports = server.exports();
