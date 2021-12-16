'use strict';

var server = require('server');

server.get('Show', function (req, res, next) {
    var catalogMgr = require('dw/catalog/CatalogMgr');
    var Categories = require('*/cartridge/models/categories');
    var params = req.querystring.cid;
    var categoryID= catalogMgr.getCategory(params);
     var rootCategory = categoryID.hasOnlineSubCategories() ?
                        categoryID.getOnlineSubCategories() : null;
    res.render('categoryInfo', new Categories(rootCategory));
    next();
});

module.exports = server.exports();

