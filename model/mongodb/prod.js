/**
 * Created by luyang.chen on 14-8-4.
 */
var mongoose = require('./mongo').mongoose;
var _ = require('underscore');

var schema = new mongoose.Schema({
    name : String,
    semiProds : Array,   // 所包含的原材料
    amount : Number,
    unit : String
});

var Obj = mongoose.model('Prod', schema);

// 增
exports.create = function(obj, callback){
    var o = new Obj(obj);
    o.save();
    callback(o);
};

// 删
exports.remove = function(id, callback) {
    Obj.remove({_id : id}).exec(callback);
};

// 改
exports.update = function(id, params, callback) {
    var obj = {};
    _.each(params, function(value, key) {
        if(key.match(/name|semiProds|amount|unit/)) obj[key] = value;
    });
    Obj.update({ _id : id }, obj, {}).exec(callback);
};

// 查
exports.query = function(params, callback) {

    var obj = { conditions : {}, options : {}, sort : {} };
    // query
    _.each(params, function(value, key) {
        if(key.match(/name|_id/)) obj.conditions[key] = value;
        if(key.match(/limit|skip/)) obj.options[key] = value;
    });

    obj.sort = params.sort ? JSON.parse(params.sort) : { _id : 1};

    Obj
        .find(obj.conditions, null, obj.options)
        .sort(obj.sort)
        .exec(callback);
};

exports.Model = Obj;