'use strict';
module.exports = function (variable) {
    return ({}).toString.call(variable).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};
