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
var CampaignCreated = module.exports.CampaignCreated = function(args) {
  this.campaign_uid = null;
  this.topic_uids = null;
  if (args) {
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.topic_uids !== undefined && args.topic_uids !== null) {
      this.topic_uids = Thrift.copyList(args.topic_uids, [null]);
    }
  }
};
CampaignCreated.prototype = {};
CampaignCreated.prototype.read = function(input) {
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
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.topic_uids = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.topic_uids.push(elem6);
        }
        input.readListEnd();
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

CampaignCreated.prototype.write = function(output) {
  output.writeStructBegin('CampaignCreated');
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 1);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.topic_uids !== null && this.topic_uids !== undefined) {
    output.writeFieldBegin('topic_uids', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.topic_uids.length);
    for (var iter7 in this.topic_uids)
    {
      if (this.topic_uids.hasOwnProperty(iter7))
      {
        iter7 = this.topic_uids[iter7];
        output.writeString(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CampaignDeleted = module.exports.CampaignDeleted = function(args) {
  this.campaign_uid = null;
  if (args) {
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
  }
};
CampaignDeleted.prototype = {};
CampaignDeleted.prototype.read = function(input) {
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
        this.campaign_uid = input.readString();
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

CampaignDeleted.prototype.write = function(output) {
  output.writeStructBegin('CampaignDeleted');
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 1);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CampaignUpdatedTopics = module.exports.CampaignUpdatedTopics = function(args) {
  this.campaign_uid = null;
  this.topic_uids = null;
  if (args) {
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.topic_uids !== undefined && args.topic_uids !== null) {
      this.topic_uids = Thrift.copyList(args.topic_uids, [null]);
    }
  }
};
CampaignUpdatedTopics.prototype = {};
CampaignUpdatedTopics.prototype.read = function(input) {
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
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.topic_uids = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.topic_uids.push(elem14);
        }
        input.readListEnd();
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

CampaignUpdatedTopics.prototype.write = function(output) {
  output.writeStructBegin('CampaignUpdatedTopics');
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 1);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.topic_uids !== null && this.topic_uids !== undefined) {
    output.writeFieldBegin('topic_uids', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.topic_uids.length);
    for (var iter15 in this.topic_uids)
    {
      if (this.topic_uids.hasOwnProperty(iter15))
      {
        iter15 = this.topic_uids[iter15];
        output.writeString(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CampaignLaunched = module.exports.CampaignLaunched = function(args) {
  this.campaign_uid = null;
  this.launched_at = null;
  if (args) {
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.launched_at !== undefined && args.launched_at !== null) {
      this.launched_at = args.launched_at;
    }
  }
};
CampaignLaunched.prototype = {};
CampaignLaunched.prototype.read = function(input) {
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
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.launched_at = input.readString();
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

CampaignLaunched.prototype.write = function(output) {
  output.writeStructBegin('CampaignLaunched');
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 1);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.launched_at !== null && this.launched_at !== undefined) {
    output.writeFieldBegin('launched_at', Thrift.Type.STRING, 2);
    output.writeString(this.launched_at);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CampaignUpdateCreated = module.exports.CampaignUpdateCreated = function(args) {
  this.campaign_uid = null;
  this.campaign_update_uid = null;
  this.campaign_leader_entity_uuid = null;
  this.campaign_title = null;
  this.campaign_update_title = null;
  this.campaign_update_body = null;
  this.image = null;
  this.video = null;
  if (args) {
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.campaign_update_uid !== undefined && args.campaign_update_uid !== null) {
      this.campaign_update_uid = args.campaign_update_uid;
    }
    if (args.campaign_leader_entity_uuid !== undefined && args.campaign_leader_entity_uuid !== null) {
      this.campaign_leader_entity_uuid = args.campaign_leader_entity_uuid;
    }
    if (args.campaign_title !== undefined && args.campaign_title !== null) {
      this.campaign_title = args.campaign_title;
    }
    if (args.campaign_update_title !== undefined && args.campaign_update_title !== null) {
      this.campaign_update_title = args.campaign_update_title;
    }
    if (args.campaign_update_body !== undefined && args.campaign_update_body !== null) {
      this.campaign_update_body = args.campaign_update_body;
    }
    if (args.image !== undefined && args.image !== null) {
      this.image = args.image;
    }
    if (args.video !== undefined && args.video !== null) {
      this.video = args.video;
    }
  }
};
CampaignUpdateCreated.prototype = {};
CampaignUpdateCreated.prototype.read = function(input) {
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
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_update_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_leader_entity_uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_update_title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_update_body = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.image = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.video = input.readString();
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

CampaignUpdateCreated.prototype.write = function(output) {
  output.writeStructBegin('CampaignUpdateCreated');
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 1);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.campaign_update_uid !== null && this.campaign_update_uid !== undefined) {
    output.writeFieldBegin('campaign_update_uid', Thrift.Type.STRING, 2);
    output.writeString(this.campaign_update_uid);
    output.writeFieldEnd();
  }
  if (this.campaign_leader_entity_uuid !== null && this.campaign_leader_entity_uuid !== undefined) {
    output.writeFieldBegin('campaign_leader_entity_uuid', Thrift.Type.STRING, 3);
    output.writeString(this.campaign_leader_entity_uuid);
    output.writeFieldEnd();
  }
  if (this.campaign_title !== null && this.campaign_title !== undefined) {
    output.writeFieldBegin('campaign_title', Thrift.Type.STRING, 4);
    output.writeString(this.campaign_title);
    output.writeFieldEnd();
  }
  if (this.campaign_update_title !== null && this.campaign_update_title !== undefined) {
    output.writeFieldBegin('campaign_update_title', Thrift.Type.STRING, 5);
    output.writeString(this.campaign_update_title);
    output.writeFieldEnd();
  }
  if (this.campaign_update_body !== null && this.campaign_update_body !== undefined) {
    output.writeFieldBegin('campaign_update_body', Thrift.Type.STRING, 6);
    output.writeString(this.campaign_update_body);
    output.writeFieldEnd();
  }
  if (this.image !== null && this.image !== undefined) {
    output.writeFieldBegin('image', Thrift.Type.STRING, 7);
    output.writeString(this.image);
    output.writeFieldEnd();
  }
  if (this.video !== null && this.video !== undefined) {
    output.writeFieldBegin('video', Thrift.Type.STRING, 8);
    output.writeString(this.video);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CampaignSupporterChanged = module.exports.CampaignSupporterChanged = function(args) {
  this.change_type = null;
  this.campaign_uid = null;
  this.entity_uuid = null;
  this.changed_at = null;
  if (args) {
    if (args.change_type !== undefined && args.change_type !== null) {
      this.change_type = args.change_type;
    }
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.entity_uuid !== undefined && args.entity_uuid !== null) {
      this.entity_uuid = args.entity_uuid;
    }
    if (args.changed_at !== undefined && args.changed_at !== null) {
      this.changed_at = args.changed_at;
    }
  }
};
CampaignSupporterChanged.prototype = {};
CampaignSupporterChanged.prototype.read = function(input) {
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
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.entity_uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
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

CampaignSupporterChanged.prototype.write = function(output) {
  output.writeStructBegin('CampaignSupporterChanged');
  if (this.change_type !== null && this.change_type !== undefined) {
    output.writeFieldBegin('change_type', Thrift.Type.I32, 1);
    output.writeI32(this.change_type);
    output.writeFieldEnd();
  }
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 2);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.entity_uuid !== null && this.entity_uuid !== undefined) {
    output.writeFieldBegin('entity_uuid', Thrift.Type.STRING, 3);
    output.writeString(this.entity_uuid);
    output.writeFieldEnd();
  }
  if (this.changed_at !== null && this.changed_at !== undefined) {
    output.writeFieldBegin('changed_at', Thrift.Type.STRING, 4);
    output.writeString(this.changed_at);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CampaignPollTriggered = module.exports.CampaignPollTriggered = function(args) {
  this.campaign_poll_uid = null;
  if (args) {
    if (args.campaign_poll_uid !== undefined && args.campaign_poll_uid !== null) {
      this.campaign_poll_uid = args.campaign_poll_uid;
    }
  }
};
CampaignPollTriggered.prototype = {};
CampaignPollTriggered.prototype.read = function(input) {
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
        this.campaign_poll_uid = input.readString();
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

CampaignPollTriggered.prototype.write = function(output) {
  output.writeStructBegin('CampaignPollTriggered');
  if (this.campaign_poll_uid !== null && this.campaign_poll_uid !== undefined) {
    output.writeFieldBegin('campaign_poll_uid', Thrift.Type.STRING, 1);
    output.writeString(this.campaign_poll_uid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

