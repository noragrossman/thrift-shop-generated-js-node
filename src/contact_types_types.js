//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Location = module.exports.Location = function(args) {
  this.line_1 = null;
  this.line_2 = null;
  this.city = null;
  this.region = null;
  this.country = null;
  this.postal_code = null;
  this.isoCountryCode = null;
  if (args) {
    if (args.line_1 !== undefined && args.line_1 !== null) {
      this.line_1 = args.line_1;
    }
    if (args.line_2 !== undefined && args.line_2 !== null) {
      this.line_2 = args.line_2;
    }
    if (args.city !== undefined && args.city !== null) {
      this.city = args.city;
    }
    if (args.region !== undefined && args.region !== null) {
      this.region = args.region;
    }
    if (args.country !== undefined && args.country !== null) {
      this.country = args.country;
    }
    if (args.postal_code !== undefined && args.postal_code !== null) {
      this.postal_code = args.postal_code;
    }
    if (args.isoCountryCode !== undefined && args.isoCountryCode !== null) {
      this.isoCountryCode = args.isoCountryCode;
    }
  }
};
Location.prototype = {};
Location.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRING) {
        this.line_1 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.line_2 = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.city = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.region = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.country = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.postal_code = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.isoCountryCode = input.readString();
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

Location.prototype.write = function(output) {
  output.writeStructBegin('Location');
  if (this.line_1 !== null && this.line_1 !== undefined) {
    output.writeFieldBegin('line_1', Thrift.Type.STRING, 1);
    output.writeString(this.line_1);
    output.writeFieldEnd();
  }
  if (this.line_2 !== null && this.line_2 !== undefined) {
    output.writeFieldBegin('line_2', Thrift.Type.STRING, 2);
    output.writeString(this.line_2);
    output.writeFieldEnd();
  }
  if (this.city !== null && this.city !== undefined) {
    output.writeFieldBegin('city', Thrift.Type.STRING, 3);
    output.writeString(this.city);
    output.writeFieldEnd();
  }
  if (this.region !== null && this.region !== undefined) {
    output.writeFieldBegin('region', Thrift.Type.STRING, 4);
    output.writeString(this.region);
    output.writeFieldEnd();
  }
  if (this.country !== null && this.country !== undefined) {
    output.writeFieldBegin('country', Thrift.Type.STRING, 5);
    output.writeString(this.country);
    output.writeFieldEnd();
  }
  if (this.postal_code !== null && this.postal_code !== undefined) {
    output.writeFieldBegin('postal_code', Thrift.Type.STRING, 6);
    output.writeString(this.postal_code);
    output.writeFieldEnd();
  }
  if (this.isoCountryCode !== null && this.isoCountryCode !== undefined) {
    output.writeFieldBegin('isoCountryCode', Thrift.Type.STRING, 7);
    output.writeString(this.isoCountryCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
