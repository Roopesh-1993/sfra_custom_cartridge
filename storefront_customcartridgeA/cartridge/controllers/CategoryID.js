'use strict';
var server = require('server');
server.get('Show', function (req, res, next) {
    var catalogMgr = require('dw/catalog/CatalogMgr');
    var Categories = require('*/cartridge/models/categoryID');
    var siteRootCategory = catalogMgr.getSiteCatalog().getRoot();
    var topLevelCategories = siteRootCategory.hasOnlineSubCategories() ?
        siteRootCategory.getOnlineSubCategories() : null;
    res.render('categoryID', new Categories(topLevelCategories));
    next();
});
module.exports = server.exports();