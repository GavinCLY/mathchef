/**
 * Created by luyang.chen on 14-8-4.
 */
module.exports = function(sequelize, DataTypes) {
    var SemiProd = sequelize.define('SemiProd', {
        id : {
            type : DataTypes.INTEGER(11).UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        name : { type : DataTypes.STRING, defaultValue : '' },
        base_amount : { type : DataTypes.INTEGER(11).UNSIGNED, defaultValue : 0 }
    }, {
        timestamps : true,
        tableName : 'semi_prod',
        classMethods : {
            associate : function(models) {
                SemiProd.hasMany(models.SemiProdComb, {
                    foreignKey : 'semi_prod_id'
                });
            }
        }
    });

    return SemiProd;
}