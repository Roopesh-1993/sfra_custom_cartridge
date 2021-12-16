'use strict';

/**
 * @namespace Hello
 */

var server = require('server');
server.get('Show', function (req, res, next) {
    res.render('hello');
    next();
});

module.exports = server.exports();

