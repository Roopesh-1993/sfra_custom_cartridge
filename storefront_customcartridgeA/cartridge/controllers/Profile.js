'use strcit'

var server = require('server');
server.get('Start', function(req,res,next){
    var customerMgr = require('dw/customer/CustomerMgr');
     var Transaction = require('dw/system/Transaction');
     var customerDetails = customerMgr.getProfile('00001001');
     Transaction.wrap(function(){
              customerDetails.custom.zip_code= 563126;
     })
     res.setViewData({ customer : customerDetails});
     res.render('profile')
     next();
});


module.exports=server.exports();