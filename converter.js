'use strict';
var moment = require('moment');

module.exports = function converter(queryStr){
  // Takes string, if it is unix timestamp it creates natural representation
  // and vice versa. Returns object with both formats.
  var result = {};

  if(Number(queryStr)){
    result.unix = Number(queryStr);
    result.natural = moment(Number(queryStr)).unix();
  } 

};
