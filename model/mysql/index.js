/**
 * Created by luyang.chen on 14-7-31.
 */
var fs        = require('fs')
    , path      = require('path')
    , Sequelize = require('sequelize')
    , lodash    = require('lodash')
    , config = require('../../config/db')
    , arguments = process.argv.splice(2)
    , db        = {};

function profile(hostname) {
    var pro = 'prd';
    if(hostname.indexOf('dev') != -1) pro = 'dev';
    if(hostname.indexOf('beta') != -1) pro = 'beta';
    return pro
}

var dbConfig = config['mysql_' + profile(arguments[0])];

var sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    port: dbConfig.port || 3306,
    dialect : 'mysql',
    pool : {
        maxConnections : 10,
        maxIdleTime : 30
    }
});

fs
    .readdirSync(__dirname + '/mysql')
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== 'index.js')
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

Object.keys(db).forEach(function(modelName) {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db)
    }
})

module.exports = lodash.extend({
    sequelize: sequelize,
    Sequelize: Sequelize
}, db);