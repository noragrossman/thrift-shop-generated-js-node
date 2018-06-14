//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var shared_ttypes = require('./shared_types');
var event_bus_ttypes = require('./event_bus_types');


var ttypes = module.exports = {};
var InfluenceScore = module.exports.InfluenceScore = function(args) {
  this.entity_uuid = null;
  this.score = null;
  if (args) {
    if (args.entity_uuid !== undefined && args.entity_uuid !== null) {
      this.entity_uuid = args.entity_uuid;
    }
    if (args.score !== undefined && args.score !== null) {
      this.score = args.score;
    }
  }
};
InfluenceScore.prototype = {};
InfluenceScore.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.entity_uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.score = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

InfluenceScore.prototype.write = function(output) {
  output.writeStructBegin('InfluenceScore');
  if (this.entity_uuid !== null && this.entity_uuid !== undefined) {
    output.writeFieldBegin('entity_uuid', Thrift.Type.STRING, 3);
    output.writeString(this.entity_uuid);
    output.writeFieldEnd();
  }
  if (this.score !== null && this.score !== undefined) {
    output.writeFieldBegin('score', Thrift.Type.I32, 2);
    output.writeI32(this.score);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
