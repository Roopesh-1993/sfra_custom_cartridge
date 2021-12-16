'use strict'

function jobsCreation() {
     var ProductMgr = require('dw/catalog/ProductMgr');
     var CustomObjectMgr = require('dw/object/CustomObjectMgr');
     var customObject = CustomObjectMgr.getAllCustomObjects('notifyMe');
     var customObjectList = customObject.asList();
     var customObjectArray = customObjectList.toArray();
     customObjectArray.forEach(element => {
          var productID = element.custom.notifyMe;
          var product = ProductMgr.getProduct(productID);
          var productAvailable = product.getAvailabilityModel().inStock;
          if (!productAvailable) {
               var email = element.custom.storeProduct;
               var splitEmail = email.split(',');
               splitEmail.forEach(item => {
                    var emailObject = {
                         to: item,
                         from: 'roopeshrock0208@gmail.com'
                    }
                    var productInfo = {
                         pid: productID,
                         pname: product.getName(),
                    }
                    var emailHepler = require('*/cartridge/scripts/helpers/emailHelpers');
                    emailHepler.sendEmail(emailObject, 'notifyJob', { productInfo: productInfo })
               });
               var Transaction = require('dw/system/Transaction');
               Transaction.wrap(function () {
                    CustomObjectMgr.remove(element);
               });

          }

     });


}

module.exports = { jobsCreation: jobsCreation }