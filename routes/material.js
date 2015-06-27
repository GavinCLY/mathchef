/**
 * Created by GavinCLY on 6/20/15.
 */
var db = require('../model');
var Promise = require('bluebird');

exports.create = function(req, res, next) {
    var body = req.body;

    db.Material
        .create({ name : body.name })
        .then(function(data) {
            res.json({});
        });
};

// 产品列表
exports.list = function(req, res, next) {
    db.Material
        .findAll({})
        .then(function(materials) {
            res.json({
                materials : materials
            });
        });
};