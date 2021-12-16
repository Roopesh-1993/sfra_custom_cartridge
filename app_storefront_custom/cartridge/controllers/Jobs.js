'use strict'

var server = require('server');

server.get('Show', function(req,res,next){
var jobs=require('*/cartridge/scripts/jobs');
var  details = jobs.jobsCreation();

res.render('notifyJob',{details:details})
    next();
})
module.exports=server.exports();