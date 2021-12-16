'use strict'

var server = require('server');

//To display the product information by using the existing models

server.get('Search', function (req, res, next) {
	var ProductFactory = require('*/cartridge/scripts/factories/product');
    var params = req.querystring;
        var product = ProductFactory.get(params);
        if (product.id) {
            res.render('productInfo', {
                product:product,
            });   
        }
        else {
            res.render('productNotFound', {
                pid:params.pid
            });
        }    
    next();
});

server.get('Least', function(req,res,next){
var base=require('*/cartridge/models/product/decorators/base');
var  ProductMgr = require('dw/catalog/ProductMgr');
var helper=require('*/cartridge/scripts/helpers/productHelpers');
var pid=req.querystring.pid;
var product=ProductMgr.getProduct(pid);
var productType=helper.getProductType(product);
var currentVar=new Object();
base(currentVar,product,productType);
res.render('productName',{currentVar:currentVar});
    next();
});

server.get('List',function(req,res,next){ 
    var CatalogMgr = require('dw/catalog/CatalogMgr'); 
    var categoryId = req.querystring.catid; 
    var category = CatalogMgr.getCategory(categoryId); 
    var product  = category.onlineProducts; 
    var subcat = category.getSubCategories(); 
    res.render('productLists',{product:product,category:category,subcat:subcat}); 
next(); 

}); 

server.get('Show', function(req,res,next){
 var CustomerMgr = require('dw/customer/CustomerMgr');
 var list = CustomerMgr.getCustomerList('RefArch');
 res.render('productNotFound',{list:list})
    next();
})

// server.get('Find', function(req,res,next){
//      var SystemObjectMgr = require('dw/object/SystemObjectMgr');
//      var systemObjects = SystemObjectMgr.getAllSystemObjects('Profile').count;
//      res.render('productNotFound',{systemObjects:systemObjects});
//      next();
// })

module.exports=server.exports();