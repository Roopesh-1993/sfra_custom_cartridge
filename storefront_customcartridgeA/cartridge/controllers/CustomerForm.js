'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
server.get(
    'Show',
    function (req, res, next) {
        var actionUrl = URLUtils.url('CustomerForm-Handler');
        var customerForm = server.forms.getForm('customerForm');
        customerForm.clear();
        res.render('/customerForm/customerDetails', {
            actionUrl: actionUrl,
            customerForm: customerForm
        });
        next();
    }
);

server.post(
    'Handler',
    function (req, res, next) {
        var customerForm = server.forms.getForm('customerForm');
        var continueUrl = URLUtils.url('CustomerForm-Show');
        var CustomObjectMgr = require('dw/object/CustomObjectMgr');
        // Perform any server-side validation before this point, and invalidate form accordingly.
        if (customerForm.valid) {
            var Transaction = require('dw/system/Transaction');
            var CustomObjects = CustomObjectMgr.getCustomObject('customer', customerForm.email.value);
            if (!empty(CustomObjects)) {
                Transaction.wrap(function(){
                    CustomObjects.custom.name = customerForm.name.value;
                    CustomObjects.custom.feedback = customerForm.feedback.value;
                    CustomObjects.custom.product = customerForm.product.value;
                    CustomObjects.custom.service = customerForm.service.value;
                    CustomObjects.custom.team = customerForm.team.value;
                    CustomObjects.custom.email = customerForm.email.value;
                })
                res.render('/customerForm/customerExist', { customObjects: CustomObjects });
            }
            else {
                Transaction.wrap(function () {
                    var CustomObject = CustomObjectMgr.createCustomObject('customer', customerForm.email.value);
                    CustomObject.custom.name = customerForm.name.value;
                    CustomObject.custom.feedback = customerForm.feedback.value;
                    CustomObject.custom.product = customerForm.product.value;
                    CustomObject.custom.service = customerForm.service.value;
                    CustomObject.custom.team = customerForm.team.value;
                    CustomObject.custom.email = customerForm.email.value;
                })
                res.render('/customerForm/customerSuccessForm', {
                    continueUrl: continueUrl,
                    customerForm: customerForm
                });
            }
            next();
        }
    });

module.exports = server.exports();