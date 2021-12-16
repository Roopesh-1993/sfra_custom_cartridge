var server = require('server');
server.extend(module.superModule);


server.append('Show', function (req, res, next) {
    var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
    var showProductPageHelperResult = productHelper.showProductPage(req.querystring, req.pageMetaData);
    var currentCustomer = req.currentCustomer.profile;
    var time = currentTime()
    if (currentCustomer) {
        var name = currentCustomer.firstName;
    }
    else {
        var remoteID = req.remoteAddress;
    }
    res.render(showProductPageHelperResult.template, {
        name: name,
        time: time,
        remoteID: remoteID,
        currentCustomer: currentCustomer
    });
    next();
});

function currentTime() {
    var currentdate = new Date();
    var datetime = "Current Time: "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return datetime;
}

server.get('NotifyProductInStock', function (req, res, next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var pid = req.querystring.pid;
    var email = req.querystring.email;
    if (customer.authenticated) {
        email = req.currentCustomer.raw.profile.email;
    }
    var notifyMeCustomObject = CustomObjectMgr.getCustomObject('notifyMe', pid);
    if (empty(notifyMeCustomObject)) {
        Transaction.wrap(function () {
            notifyMeCustomObject = CustomObjectMgr.createCustomObject('notifyMe', pid);
            notifyMeCustomObject.custom.storeProduct = email;
        });
        res.json({
            success: true
        });
    } else {
        if (pid == notifyMeCustomObject.custom.notifyMe) {
            notifyMeCustomObject = CustomObjectMgr.getCustomObject('notifyMe', pid);
            if (!empty(notifyMeCustomObject.custom.storeProduct)) {
                var productID = notifyMeCustomObject.custom.storeProduct;
                var productArray = [email];
                productArray.push(productID);
                var productString = productArray.toString();
                var productSplit = productString.split(',');
                var notifyProducts = productSplit.filter((item, i, ar) => ar.indexOf(item) === i);
            }
            Transaction.wrap(function () {
                notifyMeCustomObject.custom.storeProduct = notifyProducts.toString();
            });
            res.json({
                success: true
            });
        } else {
            var e;
            res.json({
                error: e,
                success: false
            });
        }
    }
    next();
});

server.get('WishList', function (req, res, next) {
    var CustomObjectMgr = require('dw/object/CustomObjectMgr');
    var Transaction = require('dw/system/Transaction');
    var pid=req.querystring.pid;
    var email=req.remoteAddress;
    if(customer.authenticated){
        email=req.currentCustomer.raw.profile.email;
    }
    var wishListCustomObject= CustomObjectMgr.getCustomObject('wishList',email);
    if(empty(wishListCustomObject)){
        Transaction.wrap(function(){
            wishListCustomObject=CustomObjectMgr.createCustomObject('wishList',email);
            wishListCustomObject.custom.productID=pid;
        })
        res.json({
            success:true
        });
    }else{
        if(email== wishListCustomObject.custom.wishList){
            CustomObjectMgr.getCustomObject('wishList',email);
            if(!empty(wishListCustomObject.custom.productID)){
                var product=wishListCustomObject.custom.productID;
                var productArray=[pid];
                productArray.push(product);
                var productString= productArray.toString();
                var productSplit = productString.split(',');
                var wishListProducts = productSplit.filter((item, i, ar) => ar.indexOf(item) === i);
                Transaction.wrap(function () {
                    wishListCustomObject.custom.productID = wishListProducts.toString();
                });
            }else{
                Transaction.wrap(function () {
                    wishListCustomObject.custom.productID = pid;
                });
            }
           
            res.json({
                success: true
            });
        }
        else {
            var e;
            res.json({
                error: e,
                success: false
            });
    }
    }
    next();
});


module.exports = server.exports();
