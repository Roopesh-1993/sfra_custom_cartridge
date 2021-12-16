var base = module.superModule;

function createAddressObject(addressObject, rawAddress) {
    if(!empty(addressObject) && !empty(rawAddress)){
        //  addressObject.doornumber = rawAddress.custom.doornumber;
        // addressObject.currentAddress = rawAddress.custom.currentAddress;
        // addressObject.changeAddress = rawAddress.custom.changeAddress;
    }
    return addressObject;
}

function address(addressObject,rawAddress) {
    base.call(this,addressObject,rawAddress)
    this.address = createAddressObject(this.address,addressObject);
}

 address.prototype = Object.create(base.prototype);
module.exports=address;