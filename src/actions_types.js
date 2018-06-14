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


var ttypes = module.exports = {};
ttypes.ActionType = {
  'PETITION_SIGNATURE' : 0
};
var ActionTaken = module.exports.ActionTaken = function(args) {
  this.action_uid = null;
  this.action_type = null;
  this.entity_uuid = null;
  if (args) {
    if (args.action_uid !== undefined && args.action_uid !== null) {
      this.action_uid = args.action_uid;
    }
    if (args.action_type !== undefined && args.action_type !== null) {
      this.action_type = args.action_type;
    }
    if (args.entity_uuid !== undefined && args.entity_uuid !== null) {
      this.entity_uuid = args.entity_uuid;
    }
  }
};
ActionTaken.prototype = {};
ActionTaken.prototype.read = function(input) {
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
        this.action_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.action_type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.entity_uuid = input.readString();
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

ActionTaken.prototype.write = function(output) {
  output.writeStructBegin('ActionTaken');
  if (this.action_uid !== null && this.action_uid !== undefined) {
    output.writeFieldBegin('action_uid', Thrift.Type.STRING, 1);
    output.writeString(this.action_uid);
    output.writeFieldEnd();
  }
  if (this.action_type !== null && this.action_type !== undefined) {
    output.writeFieldBegin('action_type', Thrift.Type.I32, 3);
    output.writeI32(this.action_type);
    output.writeFieldEnd();
  }
  if (this.entity_uuid !== null && this.entity_uuid !== undefined) {
    output.writeFieldBegin('entity_uuid', Thrift.Type.STRING, 4);
    output.writeString(this.entity_uuid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ActionRequested = module.exports.ActionRequested = function(args) {
  this.action_request_uid = null;
  this.requester_entity_uuid = null;
  this.target_entity_uuid = null;
  this.action_type = null;
  if (args) {
    if (args.action_request_uid !== undefined && args.action_request_uid !== null) {
      this.action_request_uid = args.action_request_uid;
    }
    if (args.requester_entity_uuid !== undefined && args.requester_entity_uuid !== null) {
      this.requester_entity_uuid = args.requester_entity_uuid;
    }
    if (args.target_entity_uuid !== undefined && args.target_entity_uuid !== null) {
      this.target_entity_uuid = args.target_entity_uuid;
    }
    if (args.action_type !== undefined && args.action_type !== null) {
      this.action_type = args.action_type;
    }
  }
};
ActionRequested.prototype = {};
ActionRequested.prototype.read = function(input) {
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
        this.action_request_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.requester_entity_uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.target_entity_uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I32) {
        this.action_type = input.readI32();
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

ActionRequested.prototype.write = function(output) {
  output.writeStructBegin('ActionRequested');
  if (this.action_request_uid !== null && this.action_request_uid !== undefined) {
    output.writeFieldBegin('action_request_uid', Thrift.Type.STRING, 1);
    output.writeString(this.action_request_uid);
    output.writeFieldEnd();
  }
  if (this.requester_entity_uuid !== null && this.requester_entity_uuid !== undefined) {
    output.writeFieldBegin('requester_entity_uuid', Thrift.Type.STRING, 5);
    output.writeString(this.requester_entity_uuid);
    output.writeFieldEnd();
  }
  if (this.target_entity_uuid !== null && this.target_entity_uuid !== undefined) {
    output.writeFieldBegin('target_entity_uuid', Thrift.Type.STRING, 6);
    output.writeString(this.target_entity_uuid);
    output.writeFieldEnd();
  }
  if (this.action_type !== null && this.action_type !== undefined) {
    output.writeFieldBegin('action_type', Thrift.Type.I32, 4);
    output.writeI32(this.action_type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PetitionLaunched = module.exports.PetitionLaunched = function(args) {
  this.petition_uid = null;
  this.petition_title = null;
  this.description = null;
  if (args) {
    if (args.petition_uid !== undefined && args.petition_uid !== null) {
      this.petition_uid = args.petition_uid;
    }
    if (args.petition_title !== undefined && args.petition_title !== null) {
      this.petition_title = args.petition_title;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
  }
};
PetitionLaunched.prototype = {};
PetitionLaunched.prototype.read = function(input) {
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
        this.petition_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.petition_title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
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

PetitionLaunched.prototype.write = function(output) {
  output.writeStructBegin('PetitionLaunched');
  if (this.petition_uid !== null && this.petition_uid !== undefined) {
    output.writeFieldBegin('petition_uid', Thrift.Type.STRING, 1);
    output.writeString(this.petition_uid);
    output.writeFieldEnd();
  }
  if (this.petition_title !== null && this.petition_title !== undefined) {
    output.writeFieldBegin('petition_title', Thrift.Type.STRING, 2);
    output.writeString(this.petition_title);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PetitionSigned = module.exports.PetitionSigned = function(args) {
  this.petition_uid = null;
  this.entity_uuid = null;
  if (args) {
    if (args.petition_uid !== undefined && args.petition_uid !== null) {
      this.petition_uid = args.petition_uid;
    }
    if (args.entity_uuid !== undefined && args.entity_uuid !== null) {
      this.entity_uuid = args.entity_uuid;
    }
  }
};
PetitionSigned.prototype = {};
PetitionSigned.prototype.read = function(input) {
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
        this.petition_uid = input.readString();
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
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PetitionSigned.prototype.write = function(output) {
  output.writeStructBegin('PetitionSigned');
  if (this.petition_uid !== null && this.petition_uid !== undefined) {
    output.writeFieldBegin('petition_uid', Thrift.Type.STRING, 1);
    output.writeString(this.petition_uid);
    output.writeFieldEnd();
  }
  if (this.entity_uuid !== null && this.entity_uuid !== undefined) {
    output.writeFieldBegin('entity_uuid', Thrift.Type.STRING, 2);
    output.writeString(this.entity_uuid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PetitionGradesPublished = module.exports.PetitionGradesPublished = function(args) {
  this.petition_uid = null;
  if (args) {
    if (args.petition_uid !== undefined && args.petition_uid !== null) {
      this.petition_uid = args.petition_uid;
    }
  }
};
PetitionGradesPublished.prototype = {};
PetitionGradesPublished.prototype.read = function(input) {
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
        this.petition_uid = input.readString();
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

PetitionGradesPublished.prototype.write = function(output) {
  output.writeStructBegin('PetitionGradesPublished');
  if (this.petition_uid !== null && this.petition_uid !== undefined) {
    output.writeFieldBegin('petition_uid', Thrift.Type.STRING, 1);
    output.writeString(this.petition_uid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PetitionGradingNotificationsTriggered = module.exports.PetitionGradingNotificationsTriggered = function(args) {
  this.petition_uid = null;
  if (args) {
    if (args.petition_uid !== undefined && args.petition_uid !== null) {
      this.petition_uid = args.petition_uid;
    }
  }
};
PetitionGradingNotificationsTriggered.prototype = {};
PetitionGradingNotificationsTriggered.prototype.read = function(input) {
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
        this.petition_uid = input.readString();
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

PetitionGradingNotificationsTriggered.prototype.write = function(output) {
  output.writeStructBegin('PetitionGradingNotificationsTriggered');
  if (this.petition_uid !== null && this.petition_uid !== undefined) {
    output.writeFieldBegin('petition_uid', Thrift.Type.STRING, 1);
    output.writeString(this.petition_uid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
