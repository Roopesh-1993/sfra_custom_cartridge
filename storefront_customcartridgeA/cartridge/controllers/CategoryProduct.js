'use strict';

/**
 * @namespace Page
 */

var server = require('server');
server.get('Show',function (req, res, next) {
    
    //To display catagory id
    var catalogMgr = require('dw/catalog/CatalogMgr');
    var categoryInfo = catalogMgr.getCategory('');
    res.render('categoryProduct',{ category : categoryInfo, categories:categoryHeirarchy})
    next();
});

function categoryHeirarchy(categoryInfo){
    var result = {
        catID: categoryInfo.ID,
        catdisplayName: categoryInfo.displayName,
        subCategories :[] 
    };
    for each(var subcat in categoryInfo.subCategories){
        var subCatJSON= categoryHeirarchy(subcat);
        result.categoryHeirarchy.push(subCatJSON);
    }
    return result;
};