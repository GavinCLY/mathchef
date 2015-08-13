/**
 * Created by GavinCLY on 6/20/15.
 */
var SemiProd = require('../model/mongodb/index').SemiProd;


/**
 * 创建 半成品
 * @param req
 * @param res
 * @param next
 */
exports.create = function(req, res, next) {
    var body = req.body;

    SemiProd
        .create({
            name : body.name,
            materials : body.materials,
            base : body.base
        }, function(err) {
            res.json({
                err : err
            });
        });
};

exports.remove = function(req, res, next) {
    var id = req.params.id;
    SemiProd.remove(id, function(err) {
        res.json({
            err : err
        });
    });
};

exports.update = function(req, res) {
    var id = req.params.id;
    SemiProd.update(id, req.body, function(err, data) {
        res.json({
            err : err
        });
    });
};

exports.query = function(req, res) {
    SemiProd.query(req.query, function(err, semiProds) {
        res.json({
            err : err,
            semiProds : semiProds
        });
    });
};

/*
exports.createComb = function(req, res, next) {
    var body = req.body;
    SemiProdComb
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

exports.removeComb = function(req, res, next) {
    var body = req.body;
    SemiProdComb
        .destroy({ id : req.params.id })
        .then(function(data) {
            res.json(data);
        });
};

// 产品列表
exports.list = function(req, res, next) {
    SemiProd
        .findAll({})
        .then(function(semiProd) {
            res.json({
                semiProd : semiProd
            });
        });
};

// 查询
exports.query = function(req, res, next) {
    var params = req.params;

    SemiProd
        .findAll({
            where : params,
            include : [{
                model : SemiProdComb,
                include : [Material]
            }]
        })
        .then(function(semiProds) {
            res.json({
                semiProds : semiProds
            })
        });
};
*/