'use strict';
var server = require('server');

//function displayCatagories 
server.get('Show', function (req, res, next) {
    var CatalogMgr =  require('dw/catalog/CatalogMgr');
    var categoryId= req.querystring.cgid;
    var categoryInfo = CatalogMgr.getCategory(categoryId);
    
    var categoryHeirarchy = displayCatagories(categoryInfo);
    res.render('catalogProducts',{ categoryHeirarchy:categoryHeirarchy});
    next();

});

function displayCatagories(categoryInfo){

    var categoryDetails = {
        
        //level one category
        cateID : categoryInfo.ID,
        catedisplayName : categoryInfo.displayName,
        categoryProduct : categoryInfo.products.length,

        //level two sub ctregory
        subCategories : [  
             {    subcateID : categoryInfo.ID,
            subcatedisplayName : categoryInfo.displayName,
            subcategoryProduct : categoryInfo.products,
        
        }]
        
    };
    for each( var level1 in categoryInfo.subCategories){
        var level1JSON = displayCatagories(level1);
        categoryDetails.subCategories.push(level1JSON);

          }
  
    return categoryDetails;
}

module.exports=server.exports();