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
ttypes.PositionAgreement = {
  'AGREE' : 1,
  'DISAGREE' : 2,
  'UNSURE' : 3
};
var CampaignRecommendation = module.exports.CampaignRecommendation = function(args) {
  this.campaign_uid = null;
  this.score = null;
  if (args) {
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.score !== undefined && args.score !== null) {
      this.score = args.score;
    }
  }
};
CampaignRecommendation.prototype = {};
CampaignRecommendation.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.DOUBLE) {
        this.score = input.readDouble();
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

CampaignRecommendation.prototype.write = function(output) {
  output.writeStructBegin('CampaignRecommendation');
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 1);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.score !== null && this.score !== undefined) {
    output.writeFieldBegin('score', Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.score);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var RulePosition = module.exports.RulePosition = function(args) {
  this.position_uid = null;
  this.agreement = null;
  if (args) {
    if (args.position_uid !== undefined && args.position_uid !== null) {
      this.position_uid = args.position_uid;
    }
    if (args.agreement !== undefined && args.agreement !== null) {
      this.agreement = args.agreement;
    }
  }
};
RulePosition.prototype = {};
RulePosition.prototype.read = function(input) {
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
        this.position_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.agreement = input.readI32();
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

RulePosition.prototype.write = function(output) {
  output.writeStructBegin('RulePosition');
  if (this.position_uid !== null && this.position_uid !== undefined) {
    output.writeFieldBegin('position_uid', Thrift.Type.STRING, 1);
    output.writeString(this.position_uid);
    output.writeFieldEnd();
  }
  if (this.agreement !== null && this.agreement !== undefined) {
    output.writeFieldBegin('agreement', Thrift.Type.I32, 2);
    output.writeI32(this.agreement);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CampaignRecommendationRule = module.exports.CampaignRecommendationRule = function(args) {
  this.uid = null;
  this.name = null;
  this.description = null;
  this.campaign_uid = null;
  this.score = null;
  this.rule_positions = null;
  if (args) {
    if (args.uid !== undefined && args.uid !== null) {
      this.uid = args.uid;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.score !== undefined && args.score !== null) {
      this.score = args.score;
    }
    if (args.rule_positions !== undefined && args.rule_positions !== null) {
      this.rule_positions = Thrift.copyList(args.rule_positions, [ttypes.RulePosition]);
    }
  }
};
CampaignRecommendationRule.prototype = {};
CampaignRecommendationRule.prototype.read = function(input) {
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
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
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
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.score = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.rule_positions = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.RulePosition();
          elem6.read(input);
          this.rule_positions.push(elem6);
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

CampaignRecommendationRule.prototype.write = function(output) {
  output.writeStructBegin('CampaignRecommendationRule');
  if (this.uid !== null && this.uid !== undefined) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 4);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.score !== null && this.score !== undefined) {
    output.writeFieldBegin('score', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.score);
    output.writeFieldEnd();
  }
  if (this.rule_positions !== null && this.rule_positions !== undefined) {
    output.writeFieldBegin('rule_positions', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRUCT, this.rule_positions.length);
    for (var iter7 in this.rule_positions)
    {
      if (this.rule_positions.hasOwnProperty(iter7))
      {
        iter7 = this.rule_positions[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CreateRuleRequest = module.exports.CreateRuleRequest = function(args) {
  this.name = null;
  this.description = null;
  this.campaign_uid = null;
  this.score = null;
  this.rule_positions = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.score !== undefined && args.score !== null) {
      this.score = args.score;
    }
    if (args.rule_positions !== undefined && args.rule_positions !== null) {
      this.rule_positions = Thrift.copyList(args.rule_positions, [ttypes.RulePosition]);
    }
  }
};
CreateRuleRequest.prototype = {};
CreateRuleRequest.prototype.read = function(input) {
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
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.description = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.DOUBLE) {
        this.score = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.rule_positions = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = new ttypes.RulePosition();
          elem14.read(input);
          this.rule_positions.push(elem14);
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

CreateRuleRequest.prototype.write = function(output) {
  output.writeStructBegin('CreateRuleRequest');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 2);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 3);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.score !== null && this.score !== undefined) {
    output.writeFieldBegin('score', Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.score);
    output.writeFieldEnd();
  }
  if (this.rule_positions !== null && this.rule_positions !== undefined) {
    output.writeFieldBegin('rule_positions', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.STRUCT, this.rule_positions.length);
    for (var iter15 in this.rule_positions)
    {
      if (this.rule_positions.hasOwnProperty(iter15))
      {
        iter15 = this.rule_positions[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DeleteRuleRequest = module.exports.DeleteRuleRequest = function(args) {
  this.rule_uid = null;
  if (args) {
    if (args.rule_uid !== undefined && args.rule_uid !== null) {
      this.rule_uid = args.rule_uid;
    }
  }
};
DeleteRuleRequest.prototype = {};
DeleteRuleRequest.prototype.read = function(input) {
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
        this.rule_uid = input.readString();
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

DeleteRuleRequest.prototype.write = function(output) {
  output.writeStructBegin('DeleteRuleRequest');
  if (this.rule_uid !== null && this.rule_uid !== undefined) {
    output.writeFieldBegin('rule_uid', Thrift.Type.STRING, 1);
    output.writeString(this.rule_uid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var GetCampaignRecommendationsRequest = module.exports.GetCampaignRecommendationsRequest = function(args) {
  this.entity_uuid = null;
  if (args) {
    if (args.entity_uuid !== undefined && args.entity_uuid !== null) {
      this.entity_uuid = args.entity_uuid;
    }
  }
};
GetCampaignRecommendationsRequest.prototype = {};
GetCampaignRecommendationsRequest.prototype.read = function(input) {
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
        this.entity_uuid = input.readString();
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

GetCampaignRecommendationsRequest.prototype.write = function(output) {
  output.writeStructBegin('GetCampaignRecommendationsRequest');
  if (this.entity_uuid !== null && this.entity_uuid !== undefined) {
    output.writeFieldBegin('entity_uuid', Thrift.Type.STRING, 1);
    output.writeString(this.entity_uuid);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var GetRulesFilterParams = module.exports.GetRulesFilterParams = function(args) {
  this.uids = null;
  this.names = null;
  this.campaign_uids = null;
  this.position_uids = null;
  if (args) {
    if (args.uids !== undefined && args.uids !== null) {
      this.uids = Thrift.copyList(args.uids, [null]);
    }
    if (args.names !== undefined && args.names !== null) {
      this.names = Thrift.copyList(args.names, [null]);
    }
    if (args.campaign_uids !== undefined && args.campaign_uids !== null) {
      this.campaign_uids = Thrift.copyList(args.campaign_uids, [null]);
    }
    if (args.position_uids !== undefined && args.position_uids !== null) {
      this.position_uids = Thrift.copyList(args.position_uids, [null]);
    }
  }
};
GetRulesFilterParams.prototype = {};
GetRulesFilterParams.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.uids = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = input.readString();
          this.uids.push(elem22);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size23 = 0;
        var _rtmp327;
        this.names = [];
        var _etype26 = 0;
        _rtmp327 = input.readListBegin();
        _etype26 = _rtmp327.etype;
        _size23 = _rtmp327.size;
        for (var _i28 = 0; _i28 < _size23; ++_i28)
        {
          var elem29 = null;
          elem29 = input.readString();
          this.names.push(elem29);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size30 = 0;
        var _rtmp334;
        this.campaign_uids = [];
        var _etype33 = 0;
        _rtmp334 = input.readListBegin();
        _etype33 = _rtmp334.etype;
        _size30 = _rtmp334.size;
        for (var _i35 = 0; _i35 < _size30; ++_i35)
        {
          var elem36 = null;
          elem36 = input.readString();
          this.campaign_uids.push(elem36);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size37 = 0;
        var _rtmp341;
        this.position_uids = [];
        var _etype40 = 0;
        _rtmp341 = input.readListBegin();
        _etype40 = _rtmp341.etype;
        _size37 = _rtmp341.size;
        for (var _i42 = 0; _i42 < _size37; ++_i42)
        {
          var elem43 = null;
          elem43 = input.readString();
          this.position_uids.push(elem43);
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

GetRulesFilterParams.prototype.write = function(output) {
  output.writeStructBegin('GetRulesFilterParams');
  if (this.uids !== null && this.uids !== undefined) {
    output.writeFieldBegin('uids', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRING, this.uids.length);
    for (var iter44 in this.uids)
    {
      if (this.uids.hasOwnProperty(iter44))
      {
        iter44 = this.uids[iter44];
        output.writeString(iter44);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.names !== null && this.names !== undefined) {
    output.writeFieldBegin('names', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.names.length);
    for (var iter45 in this.names)
    {
      if (this.names.hasOwnProperty(iter45))
      {
        iter45 = this.names[iter45];
        output.writeString(iter45);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.campaign_uids !== null && this.campaign_uids !== undefined) {
    output.writeFieldBegin('campaign_uids', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.campaign_uids.length);
    for (var iter46 in this.campaign_uids)
    {
      if (this.campaign_uids.hasOwnProperty(iter46))
      {
        iter46 = this.campaign_uids[iter46];
        output.writeString(iter46);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.position_uids !== null && this.position_uids !== undefined) {
    output.writeFieldBegin('position_uids', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.position_uids.length);
    for (var iter47 in this.position_uids)
    {
      if (this.position_uids.hasOwnProperty(iter47))
      {
        iter47 = this.position_uids[iter47];
        output.writeString(iter47);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var GetRulesRequest = module.exports.GetRulesRequest = function(args) {
  this.filter_params = null;
  if (args) {
    if (args.filter_params !== undefined && args.filter_params !== null) {
      this.filter_params = new ttypes.GetRulesFilterParams(args.filter_params);
    }
  }
};
GetRulesRequest.prototype = {};
GetRulesRequest.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.filter_params = new ttypes.GetRulesFilterParams();
        this.filter_params.read(input);
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

GetRulesRequest.prototype.write = function(output) {
  output.writeStructBegin('GetRulesRequest');
  if (this.filter_params !== null && this.filter_params !== undefined) {
    output.writeFieldBegin('filter_params', Thrift.Type.STRUCT, 1);
    this.filter_params.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UpdateRuleRequest = module.exports.UpdateRuleRequest = function(args) {
  this.uid = null;
  this.name = null;
  this.description = null;
  this.campaign_uid = null;
  this.score = null;
  this.rule_positions = null;
  if (args) {
    if (args.uid !== undefined && args.uid !== null) {
      this.uid = args.uid;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.campaign_uid !== undefined && args.campaign_uid !== null) {
      this.campaign_uid = args.campaign_uid;
    }
    if (args.score !== undefined && args.score !== null) {
      this.score = args.score;
    }
    if (args.rule_positions !== undefined && args.rule_positions !== null) {
      this.rule_positions = Thrift.copyList(args.rule_positions, [ttypes.RulePosition]);
    }
  }
};
UpdateRuleRequest.prototype = {};
UpdateRuleRequest.prototype.read = function(input) {
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
        this.uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
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
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.campaign_uid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.DOUBLE) {
        this.score = input.readDouble();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size48 = 0;
        var _rtmp352;
        this.rule_positions = [];
        var _etype51 = 0;
        _rtmp352 = input.readListBegin();
        _etype51 = _rtmp352.etype;
        _size48 = _rtmp352.size;
        for (var _i53 = 0; _i53 < _size48; ++_i53)
        {
          var elem54 = null;
          elem54 = new ttypes.RulePosition();
          elem54.read(input);
          this.rule_positions.push(elem54);
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

UpdateRuleRequest.prototype.write = function(output) {
  output.writeStructBegin('UpdateRuleRequest');
  if (this.uid !== null && this.uid !== undefined) {
    output.writeFieldBegin('uid', Thrift.Type.STRING, 1);
    output.writeString(this.uid);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin('description', Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.campaign_uid !== null && this.campaign_uid !== undefined) {
    output.writeFieldBegin('campaign_uid', Thrift.Type.STRING, 4);
    output.writeString(this.campaign_uid);
    output.writeFieldEnd();
  }
  if (this.score !== null && this.score !== undefined) {
    output.writeFieldBegin('score', Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.score);
    output.writeFieldEnd();
  }
  if (this.rule_positions !== null && this.rule_positions !== undefined) {
    output.writeFieldBegin('rule_positions', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.STRUCT, this.rule_positions.length);
    for (var iter55 in this.rule_positions)
    {
      if (this.rule_positions.hasOwnProperty(iter55))
      {
        iter55 = this.rule_positions[iter55];
        iter55.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

