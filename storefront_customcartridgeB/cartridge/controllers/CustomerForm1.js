'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get(
    'Show',
    server.middleware.https,
    function (req, res, next) {
        var actionUrl = URLUtils.url('CustomerForm1-Handler');
        var customerForm1 = server.forms.getForm('customerForm1');
        customerForm1.clear();

        res.render('/CustomerForm/customerForm1', {
            actionUrl: actionUrl,
            customerForm1: customerForm1
        });
        next();
    }
);

server.post(
    'Handler',
    server.middleware.https,
    function (req, res, next) {
    	var customerForm = server.forms.getForm('customerForm1');
		var CustomObjectMgr = require('dw/object/CustomObjectMgr');

		// Perform any server-side validation before this point, and invalidate form accordingly.
    	if (customerForm.valid) {
            this.on('route:BeforeComplete', function (req, res) {
                var Transaction = require('dw/system/Transaction');
                try {
                    Transaction.wrap(function () {
                        var CustomObject = CustomObjectMgr.createCustomObject('customer', customerForm.email.value);
                        CustomObject.custom.name = customerForm.name.value;
                        //    CustomObject.custom.date = customerForm.date.value;
                        CustomObject.custom.feedback = customerForm.feedback.value;
                        CustomObject.custom.product = customerForm.product.value;
                        CustomObject.custom.service = customerForm.service.value;
                        CustomObject.custom.team = customerForm.team.value;
                        CustomObject.custom.email = customerForm.email.value;
                    });
                    res.json({
                        success: true,
                        redirectUrl: URLUtils.url('CustomerForm1-Success').toString()
                    });
                } catch (e) {
                	var Resource = require('dw/web/Resource');
	                	res.json({
	                		success: false,
	                        error: [Resource.msg('error.Alreadyexists', 'customerForm', null)]
	                    });
                }  
            });  //end route:BeforeComplete
    	} 

        next();
    }
);

server.get(
    'Success',
    server.middleware.https,
    function (req, res, next) {
        res.render('/CustomerForm/customerSuccess', {
            continueUrl: URLUtils.url('CustomerForm1-Show'),
        	customerForm1: server.forms.getForm('customerForm1')
        });
        next();
    }
);

module.exports = server.exports();