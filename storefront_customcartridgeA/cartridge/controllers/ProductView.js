'use strict';

var server = require('server');


// server.get('QuickView', function(req, res, next) {
//     var URLUtils = require('dw/web/URLUtils');
//     var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
//     var ProductFactory = require('*/cartridge/scripts/factories/product');
//     var Resource = require('dw/web/Resource');

//     var params = req.querystring;
//     var product = ProductFactory.get(params);
//     var template = product.productType === 'set'
//         ? 'product/setQuickView.isml'
//         : 'product/quickView.isml';

//     var context = {
//         product: product,
//         resources: productHelper.getResources(),
//         quickViewFullDetailMsg: Resource.msg('link.quickview.viewdetails', 'product', null),
//         closeButtonText: Resource.msg('link.quickview.close', 'product', null),
//         enterDialogMessage: Resource.msg('msg.enter.quickview', 'product', null),
//         template: template
//     };

//     res.setViewData(context);

//     this.on('route:BeforeComplete', function (req, res) { 
//         var viewData = res.getViewData();

//         res.json({
//             productUrl: URLUtils.url('Product-Show', 'pid', viewData.product.id).relative().toString()
//         });
//     });
//     next();
// });

// server.get('Show',  function (req, res, next) {
//     var productHelper = require('*/cartridge/scripts/helpers/productHelpers');
//     var showProductPageHelperResult = productHelper.showProductPage(req.querystring, req.pageMetaData);
//     var productType = showProductPageHelperResult.product.productType;
//     if (!showProductPageHelperResult.product.online && productType !== 'set' && productType !== 'bundle') {
//         res.setStatusCode(404);
//         res.render('error/notFound');
//     } else {
//         var pageLookupResult = productHelper.getPageDesignerProductPage(showProductPageHelperResult.product);
//         if ((pageLookupResult.page && pageLookupResult.page.hasVisibilityRules()) || pageLookupResult.invisiblePage) {
//             res.cachePeriod = 0; 
//         }
//         if (pageLookupResult.page) {
//             res.page(pageLookupResult.page.ID, {}, pageLookupResult.aspectAttributes);
//         } else {
//             res.render(showProductPageHelperResult.template, {
//                 product: showProductPageHelperResult.product,
//                 resources: showProductPageHelperResult.resources,
//                 breadcrumbs: showProductPageHelperResult.breadcrumbs,
//                 canonicalUrl: showProductPageHelperResult.canonicalUrl,
//             });
//         }
//     }
//     next();
// });

// server.get('Start', function(req,re,next){
    // var CustomerMgr = require('dw/customer/CustomerMgr');
    // var profile=CustomerMgr.getProfile('00001001');

    // var Transaction = require('dw/system/Transaction');
    // Transaction.wrap(function (){
    //     profile.custom.listOfProductsViewed = product.id;

    // });

//     next();
// })

// var URLUtils = require('dw/web/URLUtils');
// var productListMgr = require('dw/customer/ProductListMgr');

// server.get('Show',function(req,res,next){
//  var CustomerMgr = require('dw/customer/CustomerMgr');
//  var profile = CustomerMgr.getProfile('00001001');
//   var Transaction = require('dw/system/Transaction');
//   Transaction.wrap(function(){
//       profile.custom.listOfProductsViewed = product.id;
//   })
//   var profiles = [];
//   var lists;
//   var totalNumber = 0;
//   var pageNumber = config.pageNumber || 1;
//   var uuid;
//   var changedList = false;
//   var uuidsCount = 0;
//   var response = {
//     hits: []
// };
// var PAGE_SIZE = 8;
// var pageSize = config.pageSize || PAGE_SIZE;
//     profiles.forEach(function (profile) {
//         lists = productListMgr.getProductLists(profile.customer, 10);
//         if (lists.length > 0 && lists[0].public) {
//             if (totalNumber < pageSize * pageNumber) {
//                 if (uuids.length > totalNumber) {
//                     uuid = uuids[totalNumber];
//                     uuidsCount++;
//                 }
//                 if (uuidsCount < pageSize * (pageNumber - 1) && uuids.length > 0 && uuid !== lists[0].ID) {
//                     changedList = true;
//                 }

//                 totalNumber++;
//                 response.hits.push({
                   
//                     id: lists[0].ID,
//                     url: URLUtils.url('Wishlist-ShowOthers', 'id', lists[0].ID).toString(),
//                     urlTitle: Resource.msg('title.link.view.public.list', 'productlist', null),
//                     urlText: Resource.msg('txt.link.view.public.list', 'productlist', null)
//                 });
//             } else {
//                 totalNumber++;
//             }
//         }
//     });

//     res.render('');
//     next();
// })
module.exports = server.exports();