/**
 * Created by luyang.chen on 14-8-4.
 */
module.exports = function(sequelize, DataTypes) {
    var ProdComb = sequelize.define('ProdComb', {
        id : {
            type : DataTypes.INTEGER(11).UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        prod_id : {
            type : DataTypes.INTEGER(11).UNSIGNED
        },
        semi_prod_id : {
            type : DataTypes.INTEGER(11).UNSIGNED
        },
        semi_prod_rate : DataTypes.INTEGER,
        unit : { type : DataTypes.STRING, defaultValue : 'g' }
    }, {
        timestamps : true,
        tableName : 'prod_comb',
        classMethods : {
            associate : function(models) {
                ProdComb.belongsTo(models.SemiProd, { foreignKey : 'semi_prod_id' });
            }
        }
    });

    return ProdComb;
}