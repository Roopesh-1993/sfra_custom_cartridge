var base = module.superModule;

function getProfile(profile, rawProfile) {
    if(!empty(profile) && !empty(rawProfile)){
        profile.address = rawProfile.custom.address;
        profile.zip_code = rawProfile.custom.zip_code;
        profile.bloodgroup = rawProfile.custom.bloodgroup;
    }
    
    return profile;
};

function account(currentCustomer, addressModel, orderModel) {
    base.call(this,currentCustomer, addressModel, orderModel);
    this.profile = getProfile(this.profile,currentCustomer.raw.profile);
}

module.exports = account;
