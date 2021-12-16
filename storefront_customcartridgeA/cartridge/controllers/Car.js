'use strict';

var server = require('server');
server.get('Show',function (req, res, next) {
    var carsObject = require('*/cartridge/scripts/carsObject');
    var myData = carsObject.carDetails();
    
res.render('car',{carInformation:myData});
    next();
});

module.exports = server.exports();