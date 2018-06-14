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
var ProfileDistrictChanged = module.exports.ProfileDistrictChanged = function(args) {
  this.change_type = null;
  this.entity_uuid = null;
  this.district_uid = null;
  this.source_type = null;
  this.source_uid = null;
  this.changed_at = null;
  if (args) {
    if (args.change_type !== undefined && args.change_type !== null) {
      this.change_type = args.change_type;
    }
    if (args.entity_uuid !== undefined && args.entity_uuid !== null) {
      this.entity_uuid = args.entity_uuid;
    }
    if (args.district_uid !== undefined && args.district_uid !== null) {
      this.district_uid = args.district_uid;
    }
    if (args.source_type !== undefined && args.source_type !== null) {
      this.source_type = args.source_type;
    }
    if (args.source_uid !== undefined && args.source_uid !== null) {
      this.source_uid = args.source_uid;
    }
    if (args.changed_at !== undefined && args.changed_at !== null) {
      this.changed_at = args.changed_at;
    }
  }
};
ProfileDistrictChanged.prototype = {};
ProfileDistrictChanged.prototype.read = function(input) {
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
        this.entity_uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.district_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.source_type = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.source_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.changed_at = input.readString();
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

ProfileDistrictChanged.prototype.write = function(output) {
  output.writeStructBegin('ProfileDistrictChanged');
  if (this.change_type !== null && this.change_type !== undefined) {
    output.writeFieldBegin('change_type', Thrift.Type.I32, 1);
    output.writeI32(this.change_type);
    output.writeFieldEnd();
  }
  if (this.entity_uuid !== null && this.entity_uuid !== undefined) {
    output.writeFieldBegin('entity_uuid', Thrift.Type.STRING, 2);
    output.writeString(this.entity_uuid);
    output.writeFieldEnd();
  }
  if (this.district_uid !== null && this.district_uid !== undefined) {
    output.writeFieldBegin('district_uid', Thrift.Type.STRING, 3);
    output.writeString(this.district_uid);
    output.writeFieldEnd();
  }
  if (this.source_type !== null && this.source_type !== undefined) {
    output.writeFieldBegin('source_type', Thrift.Type.STRING, 4);
    output.writeString(this.source_type);
    output.writeFieldEnd();
  }
  if (this.source_uid !== null && this.source_uid !== undefined) {
    output.writeFieldBegin('source_uid', Thrift.Type.STRING, 5);
    output.writeString(this.source_uid);
    output.writeFieldEnd();
  }
  if (this.changed_at !== null && this.changed_at !== undefined) {
    output.writeFieldBegin('changed_at', Thrift.Type.STRING, 6);
    output.writeString(this.changed_at);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

