'use strict'

var server = require('server')

server.get('Details', function(req,res,next){


    next();
})

module.exports=server.exports();