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
var eb_shared_ttypes = require('./eb_shared_types');


var ttypes = module.exports = {};
ttypes.ContentType = {
  'CAMPAIGN' : 1,
  'POSITION' : 2
};
var ContentTopicChanged = module.exports.ContentTopicChanged = function(args) {
  this.change_type = null;
  this.topic_uid = null;
  this.content_uid = null;
  this.changed_at = null;
  this.content_type = null;
  if (args) {
    if (args.change_type !== undefined && args.change_type !== null) {
      this.change_type = args.change_type;
    }
    if (args.topic_uid !== undefined && args.topic_uid !== null) {
      this.topic_uid = args.topic_uid;
    }
    if (args.content_uid !== undefined && args.content_uid !== null) {
      this.content_uid = args.content_uid;
    }
    if (args.changed_at !== undefined && args.changed_at !== null) {
      this.changed_at = args.changed_at;
    }
    if (args.content_type !== undefined && args.content_type !== null) {
      this.content_type = args.content_type;
    }
  }
};
ContentTopicChanged.prototype = {};
ContentTopicChanged.prototype.read = function(input) {
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
      case 1:
      if (ftype == Thrift.Type.I32) {
        this.change_type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.topic_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.content_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.changed_at = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.content_type = input.readI32();
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

ContentTopicChanged.prototype.write = function(output) {
  output.writeStructBegin('ContentTopicChanged');
  if (this.change_type !== null && this.change_type !== undefined) {
    output.writeFieldBegin('change_type', Thrift.Type.I32, 1);
    output.writeI32(this.change_type);
    output.writeFieldEnd();
  }
  if (this.topic_uid !== null && this.topic_uid !== undefined) {
    output.writeFieldBegin('topic_uid', Thrift.Type.STRING, 2);
    output.writeString(this.topic_uid);
    output.writeFieldEnd();
  }
  if (this.content_uid !== null && this.content_uid !== undefined) {
    output.writeFieldBegin('content_uid', Thrift.Type.STRING, 3);
    output.writeString(this.content_uid);
    output.writeFieldEnd();
  }
  if (this.changed_at !== null && this.changed_at !== undefined) {
    output.writeFieldBegin('changed_at', Thrift.Type.STRING, 5);
    output.writeString(this.changed_at);
    output.writeFieldEnd();
  }
  if (this.content_type !== null && this.content_type !== undefined) {
    output.writeFieldBegin('content_type', Thrift.Type.I32, 6);
    output.writeI32(this.content_type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

