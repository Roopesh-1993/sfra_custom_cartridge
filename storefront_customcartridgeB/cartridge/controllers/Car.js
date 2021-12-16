var server = require('server');
server.extend(module.superModule);

server.append('Show', function(req, res , next){
    var viewData= res.getViewData();
    var property=req.querystring.property;   
    viewData.carInformation.car.sort(function(a,b){
        return (a[property]).localeCompare(b[property]);
    });
    next();
})


module.exports = server.exports();
