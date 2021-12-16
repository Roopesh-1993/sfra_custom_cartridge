'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
server.get(
    'Show',
    function (req, res, next) {
        var actionUrl = URLUtils.url('Newsletter-Handler');
        var newsletterForm = server.forms.getForm('newsletter');
        newsletterForm.clear();
        res.render('/newsletter/newsletter', {
            actionUrl: actionUrl,
            newsletterForm: newsletterForm
        });
        next();
    }
);

server.post(
    'Handler',
    server.middleware.https,
    function (req, res, next) {
        var newsletterForm = server.forms.getForm('newsletter');
        var continueUrl = URLUtils.url('Newsletter-Show');
        var CustomObjectMgr = require('dw/object/CustomObjectMgr');
        // Perform any server-side validation before this point, and invalidate form accordingly.
        if (newsletterForm.valid) {
            var Transaction = require('dw/system/Transaction');
            var CustomObjects = CustomObjectMgr.getCustomObject('trainee', newsletterForm.email.value);

            if (!empty(CustomObjects)) {

                res.render('/newsletter/newsletterExist' ,{customObjects :CustomObjects});
            } 
            else {
                Transaction.wrap(function () {
                    var CustomObject = CustomObjectMgr.createCustomObject('trainee', newsletterForm.email.value);
                    CustomObject.custom.name = newsletterForm.name.value;
                    CustomObject.custom.age = newsletterForm.age.value;
                    CustomObject.custom.gender = newsletterForm.gender.value;
                    CustomObject.custom.email = newsletterForm.email.value;
                    res.render('/newsletter/newslettersuccess', {
                        continueUrl: continueUrl,
                        newsletterForm: newsletterForm
                    });
                })

            }
            next();
        }
    });


server.get('Create', function (req, res, next) {
    var CustomObject = require('dw/object/CustomObjectMgr');
    var customobj = CustomObject.getAllCustomObjects("trainee");
    var listCustomObj =customobj.asList().toArray();
    res.render('/newsletter/newsletterAllCustomObject', { customdisp: listCustomObj });
    next();
});


module.exports = server.exports();