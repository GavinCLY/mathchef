/**
 * Created by GavinCLY on 6/20/15.
 */
var db = require('../model');
var Promise = require('bluebird');

/**
 * 创建 半成品
 * @param req
 * @param res
 * @param next
 */
exports.create = function(req, res, next) {
    var body = req.body;

    db.SemiProd
        .create({
            name : body.name,
            base_amount : body.base_amount
        })
        .then(function(data) {
            res.json(data);
        });
};

/**
 * 创建 半成品--原材料 对应关系
 * @param req
 * @param res
 * @param next
 */
exports.createComb = function(req, res, next) {
    var body = req.body;
    db.SemiProdComb
        .create({
            semi_prod_id : body.semi_prod_id,
            material_id : body.material_id,
            material_rate : body.material_rate,
            unit : body.unit || 'g'
        })
        .then(function(data){
            res.json(data);
        });
};

/**
 * 删除 半成品--原材料 对应关系
 * @param req
 * @param res
 * @param next
 */
exports.removeComb = function(req, res, next) {
    var body = req.body;
    db.SemiProdComb
        .destroy({ id : req.params.id })
        .then(function(data) {
            res.json(data);
        });
};

// 产品列表
exports.list = function(req, res, next) {
    db.SemiProd
        .findAll({})
        .then(function(semiProd) {
            res.json({
                semiProd : semiProd
            });
        });
};