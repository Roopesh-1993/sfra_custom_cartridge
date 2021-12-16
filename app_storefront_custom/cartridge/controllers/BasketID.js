'use strict'
var server = require('server');

//To display the stores information by passing the id in the params
server.get('Show', function(req,res,next){
  var StoreMgr = require('dw/catalog/StoreMgr'); 
  var storeID = req.querystring.sid;
  var StoresInfo= StoreMgr.getStore(storeID);
res.render('storeInfo',{StoresInfo:StoresInfo})
    next();
});


// directly passing script API object to the template
server.get('Find', function (req, res, next) {
  var BasketMgr = require('dw/order/BasketMgr');
    var basket = BasketMgr.getCurrentOrNewBasket();
    res.render('basketCart', { Basket: basket });
    next();
});


server.get('Start', function(req,res,next){
   var BasketMgr = require('dw/order/BasketMgr');
   var CartModel = require('*/cartridge/models/cart');
   var currentBasket = BasketMgr.getCurrentBasket();
   var basketModel = new CartModel(currentBasket);
   res.render('basketCart', basketModel);
   next();
})


module.exports=server.exports();