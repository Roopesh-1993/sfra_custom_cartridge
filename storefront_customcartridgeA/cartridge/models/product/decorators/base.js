var base = module.superModule;

module.exports = function (object, apiProduct, type) {
    base.call(this,object, apiProduct, type)
    Object.defineProperty(object, 'badge', {
        enumerable: true,
        value: apiProduct.custom.badge
    });
    Object.defineProperty(object, 'brand1', {
        enumerable: true,
        value: apiProduct.custom.brand1
    });
   
}


