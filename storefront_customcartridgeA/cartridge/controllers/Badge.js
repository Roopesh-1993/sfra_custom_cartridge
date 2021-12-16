'use strict'

var server = require('server')

server.get('Enable',function(req,res,next){
    var site=require('dw/system/Site');
    var customValue=site.getCurrent().getCustomPreferenceValue("enableBadge");

res.render('product/components/badgeImage',{customValue:customValue});

    next();
});

module.exports=server.exports();