"use strict"

var Worker = require("basic-distributed-computation").Worker;

class Copy extends Worker {
  constructor(parent){
    super("cp", parent);
  }

  work(req, inputKey, outputKey){
    var inputVal;
    if(inputKey){
      inputVal = req.body[inputKey];
    } else {
      inputVal = req.body;
    }
    if(outputKey && inputKey){
      req.body[outputKey] = inputVal;
    } else if(outputKey){
      req.body = {};
      req.body[outputKey] = inputVal;
    } else {
      req.body = inputVal;
    }
    req.next();
  }
}

module.exports = Copy;
