/**
 * Created by GavinCLY on 6/20/15.
 */
var db = require('../model');
var Promise = require('bluebird');

/**
 * 创建 成品 数据
 * @param req
 * @param res
 * @param next
 */
exports.create = function(req, res, next) {
    var body = req.body;

    db.Prod
        .create({
            name : body.name,
            base_amount : body.base_amount
        })
        .then(function(data) {
            res.json(data);
        });
};

/**
 * 更新 成品 数据
 * @param req
 * @param res
 * @param next
 */
exports.update = function(req, res, next) {
    var body = req.body;
    db.Prod
        .update({
            name : body.name,
            base_amount : body.base_amount
        }, { id : req.params.id })
        .then(function(data) {
            res.json(data);
        })
}

/**
 * 创建 成品 -- 半成品 数据
 * @param req
 * @param res
 * @param next
 */
exports.createComb = function(req, res, next) {
    var body = req.body;
    db.ProdComb
        .create({
            prod_id : body.prod_id,
            semi_prod_id : body.semi_prod_id,
            semi_prod_rate : body.semi_prod_rate,
            unit : body.unit || 'g'
        })
        .then(function(resp) {
            res.json(resp);
        });
};

/**
 * 删除ProdComb 数据
 * @param req
 * @param res
 * @param next
 */
exports.removeComb = function(req, res, next) {
    db.ProdComb
        .destroy({ id : req.params.id })
        .then(function(resp) {
            res.json(resp);
        });
};

// 产品列表
exports.list = function(req, res, next) {
    db.Prod
        .findAll({})
        .then(function(prods) {
            res.render('index', {
                prods : prods
            });
        });
};

// 查找单个产品
exports.find = function(req, res, next) {
    var prodId = req.params.id;
    db.Prod
        .find({
            where : { id : prodId },
            include : [{
                model : db.ProdComb,
                include : [{
                    model : db.SemiProd,
                    include : [{
                        model : db.SemiProdComb,
                        include : [db.Material]
                    }]
                }]
            }]
        })
        .then(function(prod) {
            res.json({
                prod : prod
            });
        });
}