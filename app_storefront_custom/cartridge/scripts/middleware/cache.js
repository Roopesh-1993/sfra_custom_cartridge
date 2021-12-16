'use strict';
var base = module.superModule;
 
function applyCustomCache(req, res, next) {
    res.cachePeriod = 6; 
    res.cachePeriodUnit = 'hours';
    next();
}
 
base.applyCustomCache = applyCustomCache;
 
module.exports = base;