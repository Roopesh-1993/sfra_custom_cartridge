'use strict';
var collections = require('*/cartridge/scripts/util/collections');
function categoryToObject(category) {
    var result = {
        name: category.getDisplayName(),
        customCategory:category.custom.customCategory,
        product:category.getProducts().length,
        id: category.ID
    };
    var subCategories = category.hasOnlineSubCategories() ?
        category.getOnlineSubCategories() : null;
    if (subCategories) {
        collections.forEach(subCategories, function (subcategory) {
            var converted = null;
            if (subcategory.hasOnlineProducts() || subcategory.hasOnlineSubCategories()) {
                converted = categoryToObject(subcategory);
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
function categories(items) {
    this.categories = [];
    collections.forEach(items, function (item) {
        if(item.hasOnlineProducts() || item.hasOnlineSubCategories()) {
            this.categories.push(categoryToObject(item));
        }
    }, this);
}
module.exports = categories;
