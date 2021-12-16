'use strict'
var server = require('server');
server.get('Find', function(req,res,next){
    var ProductMgr = require('dw/catalog/ProductMgr');
   var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
   var  productID = req.querystring.pid;
if(!empty(productID)){

    var product = ProductMgr.getProduct(productID);
    if(!empty(product)){
        var productType = productHelper.getProductType(product);
    }else{
        var errorMsg = 'ProductID Not Available';
    }
    }else
    {
    var error ='Enter the productID';
    }
    
   res.render('productType',{
       productType:productType,
       productID:productID,
       error:error,
       product:product,
       errorMsg:errorMsg
    });

   next();
 });



 module.exports=server.exports();