'use strict';
var server = require('server');
server.get('Show',function (req, res, next) {
    
    //To display catagory id
    var catalogMgr = require('dw/catalog/CatalogMgr');
    var categoryID= req.querystring.cgid;
    var categoryInfo = catalogMgr.getCategory(categoryID);
    res.render('assingment',{ category : categoryInfo});

    next();
});

module.exports = server.exports();