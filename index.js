'use strict';
var typeOf =function (variable) {
    return ({}).toString.call(variable).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
module.exports = typeOf;
