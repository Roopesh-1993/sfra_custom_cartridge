var server = require('server');
server.extend(module.superModule);

server.append('Confirm', function (req, res, next) {
 var Transaction = require('dw/system/Transaction');
 var OrderMgr = require('dw/order/OrderMgr');  
var data = res.getViewData();
 var orders = OrderMgr.getOrder(data.order.orderNumber);
        Transaction.wrap(function(){
            orders.custom.ordermessage = "Order Placed Successfully";
        })
        
var orderMessage = orders.custom.ordermessage;
        res.render('checkout/confirmation/confirmation', {
            orderdata:orderMessage
        });
        next();
    })

module.exports = server.exports();
