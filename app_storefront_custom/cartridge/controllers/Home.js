'use strict';

/**
 * @namespace Home
 */


 var server = require('server');
 var cache = require('*/cartridge/scripts/middleware/cache');
 var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
 var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');
  
 
 server.get('Show', consentTracking.consent, cache.applyCustomCache, function (req, res, next) {​​​​​​
 var Site = require('dw/system/Site');
 var PageMgr = require('dw/experience/PageMgr');
 var pageMetaHelper = require('*/cartridge/scripts/helpers/pageMetaHelper');
  
 pageMetaHelper.setPageMetaTags(req.pageMetaData, Site.current);
  
 var page = PageMgr.getPage('homePage');
  
 if (page && page.isVisible()) {​​​​​​
 res.page('homePage');
     }​​​​​​ else {​​​​​​
 res.render('home/homePage');
     }​​​​​​
 next();
 }​​​​​​, pageMetaData.computedPageMetaData);
  
 server.get('ErrorNotFound', function (req, res, next) {​​​​​​
 res.setStatusCode(404);
 res.render('error/notFound');
 next();
 }​​​​​​);
 
//  server.get('Show' , function(req, res, next){
//     var actionUrl = URLUtils.url('Refisterform-Show');
// res.render('Refisterform')
//     next();
//  })
  
 module.exports = server.exports();
 
 

// var server = require('server');
// server.extend(module.superModule);
// server.append('Show', function (req, res, next) {
//     var abc={testapp:'test app'};
// res.setViewData(abc);
//     next();
// });
// server.prepend('Show' ,function (req, res, next) {
//     var xyz={testpre:'test prepend'};
// res.setViewData(xyz);
//     next();
// });
// server.replace('Show' ,function (req, res, next) {
//     var xyz={testpre:'test prepend'};
// res.setViewData(xyz);
// res.render('hello');
//     next();
// });
// module.exports = server.exports();