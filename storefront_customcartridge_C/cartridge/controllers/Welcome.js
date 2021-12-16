'use strict';

/**
 * @namespace Page
 */

var server = require('server');
server.get('Show',function (req, res, next) {
res.render('welcome')
    next()
});
module.exports = server.exports();