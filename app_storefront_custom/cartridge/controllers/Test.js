// 'use strict';

// var server = require('server');

// var example = require('*/cartridge/scripts/example');

// server.get('Start', example.test function(req,res,next){
// //  
//     res.render('Test');

// next();

// });

// module.exports=server.exports()

'use strict';
var server = require('server');

var example = require('*/cartridge/scripts/example');

server.get('Start',  function(req,res,next){
    
    var myData = example.test();
    res.render('test', myData);

    

    var name = {'roopesh':example.roopesh()};
    // res.setViewData(name);
     res.render('test', name);

     var course = {'course':example.course()};
     res.render('test',course);

     var condition = {'condition': example.condition()};
     res.render('test',condition);

     var Loop = {'loop': example.loop()};
     res.render('test',Loop);
        

     var add = {'addTwoNumbers': example.addTwoNumbers()};
     res.render('test', add);

     var content={'jsonData': example.jsonData()};
     res.render('test', content);

     var doWhileLoop = {'whileLoop': example.whileLoop()};
     res.render('test', doWhileLoop);

     var breakLoopFor = {'breakLoop': example.breakLoop()};
     res.render('test', breakLoopFor);
     
     next();
    });
     module.exports=server.exports()
