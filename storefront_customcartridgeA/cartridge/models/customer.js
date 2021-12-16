var Resource = require('dw/web/Resource');

function customerProducts(quantity,minOrderQuantity,availabilityModel){
    var availability = {};
    availability.messages = [];
    var productQuantity = quantity ? parseInt(quantity, 10) : minOrderQuantity;

    var availabilityModelLevels = availabilityModel.getAvailabilityLevels(productQuantity);
    // var inventoryRecord = availabilityModel.inventoryRecord;

    // if (inventoryRecord && inventoryRecord.inStockDate) {
    //     availability.inStockDate = inventoryRecord.inStockDate.toDateString();
    // } else {
    //     availability.inStockDate = null;
    // }
    if (availabilityModelLevels.inStock.value >= 10) {
        if (availabilityModelLevels.inStock.value === productQuantity) {
            availability.messages.push(Resource.msg('label.instock', 'common', null));
        } else {
            availability.messages.push(
                Resource.msgf(
                    'label.quantity.in.stock',
                    'common',
                    null,
                    availabilityModelLevels.inStock.value
                )
            );
        }
    }
    if (availabilityModelLevels.inStock.value = 0) {
        if (availabilityModelLevels.inStock.value === productQuantity) {
            availability.messages.push(Resource.msg('label.outOfStock', 'common', null));
        } else {
            availability.messages.push(
                Resource.msgf(
                    'label.quantity.out.of.stock',
                    'common',
                    null,
                    availabilityModelLevels.inStock.value
                )
            );
        }
    }
    if (availabilityModelLevels.inStock.value < 10) {
        if (availabilityModelLevels.inStock.value === productQuantity) {
            availability.messages.push(Resource.msg('label.onlyFewLeft', 'common', null));
        } else {
            availability.messages.push(
                Resource.msgf(
                    'label.quantity.only.few.left',
                    'common',
                    null,
                    availabilityModelLevels.inStock.value
                )
            );
        }
    }
return customerProducts;
}

module.exports= customerProducts;