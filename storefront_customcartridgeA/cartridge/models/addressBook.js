'use strict';

function createCustomer(addressObject) {
    var result = {
            address1: addressObject.address1,
            address2: addressObject.address2,
            city: addressObject.city,
            firstName: addressObject.firstName,
            lastName: addressObject.lastName,
            phone: addressObject.phone,
            postalCode: addressObject.postalCode,
        };
        return result;
    }
    function address(addressObject){
        this.address= createCustomer(addressObject)
    }
        
 module.exports = address;