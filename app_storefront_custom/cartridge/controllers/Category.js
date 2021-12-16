'use strict';

var server = require('server');
server.get('Show',function (req, res, next) {

    //To display catagory id
    var catalogMgr = require('dw/catalog/CatalogMgr');
    var categoryID= req.querystring.cgid;
    var protective = catalogMgr.getCategory(categoryID);
    res.setViewData({ profile : protective}); 

    //To display product name
    var productMgr = require('dw/catalog/ProductMgr');
    var productID= req.querystring.pid;
    var catalogProducts = productMgr.getProduct(productID);
    res.setViewData({ products : catalogProducts});


    //To display customer ID information
    var customerMgr = require('dw/customer/CustomerMgr');
    var customerDetails = customerMgr.getProfile('00000001');
    res.setViewData({ customer : customerDetails}); 
    
    var profiles = customerMgr.queryProfiles('firstName={0}',null,'roopesh');
    res.setViewData({customerName:profiles.asList()});

        res.render('catdetails');
    next();
});

//To display address in BM
server.get('Find', function(req,res,next){
    var customerMgr = require('dw/customer/CustomerMgr');
     var Transaction = require('dw/system/Transaction');
     var customerDetails = customerMgr.getProfile('00001001');
     
     Transaction.wrap(function(){

        //  customerDetails.custom.address= ;
         customerDetails.custom.zip_code= 563125;
     })
     res.setViewData({ customer : customerDetails});
     res.render('catdetails')
     next();
});


module.exports=server.exports();