'use strict';
var moment = require('moment');

module.exports = function converter(queryStr){
  // Takes string, if it is unix timestamp it creates natural representation
  // and vice versa. Returns object with both formats.
  var result = {};

  if(Number(queryStr)){
    result.unix = queryStr;
    result.natural = moment(moment.unix(Number(queryStr))).format('MMMM D, YYYY');
  } else{
    result.unix = moment(queryStr).isValid() ? moment(queryStr).unix() : null;
    result.natural = moment(queryStr).isValid() ? moment(queryStr).format('MMMM D, YYYY') : null;
  }

  return result;

};
