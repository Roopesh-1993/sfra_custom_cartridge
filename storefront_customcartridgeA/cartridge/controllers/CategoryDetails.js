 'use strcit'

 var server = require('server');

 server.get('Find', function(req,res,next){
  var CatalogMgr = require('dw/catalog/CatalogMgr');
  var siteRootCategory = CatalogMgr.getSiteCatalog().getRoot();

res.render('categoryDetails',{catalogDetails:getCustom(siteRootCategory)})
    next();
 })

 function getCustom(siteRootCategory) {
     var collections = require('*/cartridge/scripts/util/collections');
    var result = {
        id: siteRootCategory.ID,
        name: siteRootCategory.getDisplayName()
    };
    var subCategories = siteRootCategory.hasOnlineSubCategories() ?
    siteRootCategory.getOnlineSubCategories() : null;

 var customCategory = siteRootCategory.custom.customCategory;
if(!customCategory){
    return null;
}
    if (subCategories) {
        collections.forEach(subCategories, function (subcategory) {
            var converted = null;
            if (subcategory.hasOnlineProducts() || subcategory.hasOnlineSubCategories()) {
                converted = getCustom(subcategory);
            }
            if (converted) {
                if (!result.subCategories) {
                    result.subCategories = [];
                }
                result.subCategories.push(converted);
            }
        });
    }
    return result;
}

 module.exports=server.exports();


