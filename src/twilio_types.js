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
var TwilioRequestException = module.exports.TwilioRequestException = function(args) {
  Thrift.TException.call(this, "TwilioRequestException");
  this.name = "TwilioRequestException";
  this.message = null;
  this.twilio_error_code = null;
  this.http_status_code = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
    if (args.twilio_error_code !== undefined && args.twilio_error_code !== null) {
      this.twilio_error_code = args.twilio_error_code;
    }
    if (args.http_status_code !== undefined && args.http_status_code !== null) {
      this.http_status_code = args.http_status_code;
    }
  }
};
Thrift.inherits(TwilioRequestException, Thrift.TException);
TwilioRequestException.prototype.name = 'TwilioRequestException';
TwilioRequestException.prototype.read = function(input) {
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
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.twilio_error_code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.http_status_code = input.readI32();
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

TwilioRequestException.prototype.write = function(output) {
  output.writeStructBegin('TwilioRequestException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  if (this.twilio_error_code !== null && this.twilio_error_code !== undefined) {
    output.writeFieldBegin('twilio_error_code', Thrift.Type.I32, 2);
    output.writeI32(this.twilio_error_code);
    output.writeFieldEnd();
  }
  if (this.http_status_code !== null && this.http_status_code !== undefined) {
    output.writeFieldBegin('http_status_code', Thrift.Type.I32, 3);
    output.writeI32(this.http_status_code);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TwilioStateException = module.exports.TwilioStateException = function(args) {
  Thrift.TException.call(this, "TwilioStateException");
  this.name = "TwilioStateException";
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(TwilioStateException, Thrift.TException);
TwilioStateException.prototype.name = 'TwilioStateException';
TwilioStateException.prototype.read = function(input) {
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
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TwilioStateException.prototype.write = function(output) {
  output.writeStructBegin('TwilioStateException');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

