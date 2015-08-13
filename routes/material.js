/**
 * Created by GavinCLY on 6/20/15.
 */
var Material = require('../model/mongodb/index').Material;

exports.create = function(req, res, next) {
    var body = req.body;

    Material
        .create({ name : body.name }, function(err) {
            res.json({
                err : err
            });
        });
};

exports.remove = function(req, res, next) {
    var id = req.params.id;
    Material.remove(id, function(err) {
        res.json({
            err : err
        });
    });
};

exports.update = function(req, res) {
    var id = req.params.id;
    Material.update(id, req.body, function(err) {
        res.json({
            err : err
        });
    });
};

exports.query = function(req, res) {
    Material.query(req.query, function(err, materials) {
        res.json({
            err : err,
            materials : materials
        });
    });
};