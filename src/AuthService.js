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


var ttypes = require('./auth_types');
//HELPER FUNCTIONS AND STRUCTURES

var AuthService_create_user_web_oauth_tokens_args = function(args) {
  this.headers = null;
  this.request = null;
  if (args) {
    if (args.headers !== undefined && args.headers !== null) {
      this.headers = new shared_ttypes.RequestHeaders(args.headers);
    }
    if (args.request !== undefined && args.request !== null) {
      this.request = new ttypes.CreateUserWebOauthTokensRequest(args.request);
    }
  }
};
AuthService_create_user_web_oauth_tokens_args.prototype = {};
AuthService_create_user_web_oauth_tokens_args.prototype.read = function(input) {
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
        this.headers = new shared_ttypes.RequestHeaders();
        this.headers.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.request = new ttypes.CreateUserWebOauthTokensRequest();
        this.request.read(input);
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

AuthService_create_user_web_oauth_tokens_args.prototype.write = function(output) {
  output.writeStructBegin('AuthService_create_user_web_oauth_tokens_args');
  if (this.headers !== null && this.headers !== undefined) {
    output.writeFieldBegin('headers', Thrift.Type.STRUCT, 1);
    this.headers.write(output);
    output.writeFieldEnd();
  }
  if (this.request !== null && this.request !== undefined) {
    output.writeFieldBegin('request', Thrift.Type.STRUCT, 2);
    this.request.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthService_create_user_web_oauth_tokens_result = function(args) {
  this.success = null;
  this.argument_exception = null;
  this.unauthorized_exception = null;
  if (args instanceof shared_ttypes.ArgumentException) {
    this.argument_exception = args;
    return;
  }
  if (args instanceof shared_ttypes.UnauthorizedException) {
    this.unauthorized_exception = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.OauthTokens(args.success);
    }
    if (args.argument_exception !== undefined && args.argument_exception !== null) {
      this.argument_exception = args.argument_exception;
    }
    if (args.unauthorized_exception !== undefined && args.unauthorized_exception !== null) {
      this.unauthorized_exception = args.unauthorized_exception;
    }
  }
};
AuthService_create_user_web_oauth_tokens_result.prototype = {};
AuthService_create_user_web_oauth_tokens_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.OauthTokens();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.argument_exception = new shared_ttypes.ArgumentException();
        this.argument_exception.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.unauthorized_exception = new shared_ttypes.UnauthorizedException();
        this.unauthorized_exception.read(input);
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

AuthService_create_user_web_oauth_tokens_result.prototype.write = function(output) {
  output.writeStructBegin('AuthService_create_user_web_oauth_tokens_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.argument_exception !== null && this.argument_exception !== undefined) {
    output.writeFieldBegin('argument_exception', Thrift.Type.STRUCT, 1);
    this.argument_exception.write(output);
    output.writeFieldEnd();
  }
  if (this.unauthorized_exception !== null && this.unauthorized_exception !== undefined) {
    output.writeFieldBegin('unauthorized_exception', Thrift.Type.STRUCT, 2);
    this.unauthorized_exception.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AuthServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
AuthServiceClient.prototype = {};
AuthServiceClient.prototype.seqid = function() { return this._seqid; };
AuthServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
AuthServiceClient.prototype.create_user_web_oauth_tokens = function(headers, request, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_create_user_web_oauth_tokens(headers, request);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_create_user_web_oauth_tokens(headers, request);
  }
};

AuthServiceClient.prototype.send_create_user_web_oauth_tokens = function(headers, request) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('create_user_web_oauth_tokens', Thrift.MessageType.CALL, this.seqid());
  var args = new AuthService_create_user_web_oauth_tokens_args();
  args.headers = headers;
  args.request = request;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

AuthServiceClient.prototype.recv_create_user_web_oauth_tokens = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new AuthService_create_user_web_oauth_tokens_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.argument_exception) {
    return callback(result.argument_exception);
  }
  if (null !== result.unauthorized_exception) {
    return callback(result.unauthorized_exception);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('create_user_web_oauth_tokens failed: unknown result');
};
var AuthServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
AuthServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
AuthServiceProcessor.prototype.process_create_user_web_oauth_tokens = function(seqid, input, output) {
  var args = new AuthService_create_user_web_oauth_tokens_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.create_user_web_oauth_tokens.length === 2) {
    Q.fcall(this._handler.create_user_web_oauth_tokens, args.headers, args.request)
      .then(function(result) {
        var result_obj = new AuthService_create_user_web_oauth_tokens_result({success: result});
        output.writeMessageBegin("create_user_web_oauth_tokens", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof shared_ttypes.ArgumentException || err instanceof shared_ttypes.UnauthorizedException) {
          result = new AuthService_create_user_web_oauth_tokens_result(err);
          output.writeMessageBegin("create_user_web_oauth_tokens", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("create_user_web_oauth_tokens", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.create_user_web_oauth_tokens(args.headers, args.request, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof shared_ttypes.ArgumentException || err instanceof shared_ttypes.UnauthorizedException) {
        result_obj = new AuthService_create_user_web_oauth_tokens_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("create_user_web_oauth_tokens", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("create_user_web_oauth_tokens", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
