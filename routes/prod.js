/**
 * Created by GavinCLY on 6/20/15.
 */
var Prod = require('../model/mongodb/index').Prod;
var _ = require('underscore');

/**
 * 创建 成品 数据
 * @param req
 * @param res
 * @param next
 */
exports.create = function(req, res, next) {
    var body = req.body;

    Prod
        .create(body, function(prod) {
            res.json({
                id : prod.get('id')
            });
        });
};

exports.remove = function(req, res, next) {
    var id = req.params.id;
    Prod.remove(id, function(err) {
        res.json({
            err : err
        });
    });
};

exports.update = function(req, res) {
    var id = req.params.id;
    Prod.update(id, req.body, function(err) {
        res.json({
            err : err
        });
    });
};

exports.query = function(req, res) {
    Prod.query(req.query, function(err, prods) {
        res.json({
            err : err,
            prods : prods
        });
    });
};


/*

exports.createComb = function(req, res, next) {
    var body = req.body;
    ProdComb
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

exports.removeComb = function(req, res, next) {
    ProdComb
        .destroy({ id : req.params.id })
        .then(function(resp) {
            res.json(resp);
        });
};

// 产品列表
exports.list = function(req, res, next) {
    Prod
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
    Prod
        .find({
            where : { id : prodId },
            include : [{
                model : ProdComb,
                include : [{
                    model : SemiProd,
                    include : [{
                        model : SemiProdComb,
                        include : [Material]
                    }]
                }]
            }]
        })
        .then(function(prod) {
            res.json({
                prod : prod
            });
        });
};

// 查询
exports.query = function(req, res, next) {
    var params = req.params;

    Prod
        .findAll({
            where : params
        })
        .then(function(prods) {
            res.json({
                prods : prods
            })
        });
};

//  更新 整个
exports.updateEntity = function(req, res, next) {
    var prodId = req.params.id, prod = req.body;
    var newSemiProd
    // 创建material， 创建半成品，创建成品
    _.each(prod.ProdCombs, function(prodComb) {

    });
};
*/