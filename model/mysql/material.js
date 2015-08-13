/**
 * Created by luyang.chen on 14-8-4.
 */
module.exports = function(sequelize, DataTypes) {
    var Material = sequelize.define('Material', {
        id : {
            type : DataTypes.INTEGER(11).UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        name : { type : DataTypes.STRING, defaultValue : '' }
    }, {
        timestamps : true,
        tableName : 'material',
        classMethods : {
        }
    });

    return Material;
}