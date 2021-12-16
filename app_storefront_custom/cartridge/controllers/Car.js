'use strict';
var server = require('server');

var car= require('*/cartridge/scripts/middleware/car')
server.get('Find', car.carDetails , function(req,res,next){

    res.render('carObject');
next();
});


var carObjects = require('*/cartridge/scripts/middleware/car');

server.get('Start', carObjects.carDetail, function(req,res,next){
 
    res.render('carObject');

next();

});
module.exports=server.exports();