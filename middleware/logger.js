'use strict';

const logger = (req, res, next) => {
// console.log('this is a log');
req.log = 'this is a log';
next();
};

module.exports = logger;
