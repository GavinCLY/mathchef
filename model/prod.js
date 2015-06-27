/**
 * Created by luyang.chen on 14-8-4.
 */
module.exports = function(sequelize, DataTypes) {
    var Prod = sequelize.define('Prod', {
        id : {
            type : DataTypes.INTEGER(11).UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        name : { type : DataTypes.STRING, defaultValue : '' },
        base_amount : { type : DataTypes.INTEGER(11).UNSIGNED, defaultValue : 0 }
    }, {
        timestamps : true,
        tableName : 'prod',
        classMethods : {
            associate : function(models) {
                Prod.hasMany(models.ProdComb, {
                    foreignKey : 'prod_id'
                });
            }
        }
    });

    return Prod;
}