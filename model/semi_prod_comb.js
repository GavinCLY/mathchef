/**
 * Created by luyang.chen on 14-8-4.
 */
module.exports = function(sequelize, DataTypes) {
    var SemiProdComb = sequelize.define('SemiProdComb', {
        id : {
            type : DataTypes.INTEGER(11).UNSIGNED,
            autoIncrement : true,
            primaryKey : true
        },
        semi_prod_id : {
            type : DataTypes.INTEGER(11).UNSIGNED
        },
        material_id : {
            type : DataTypes.INTEGER(11).UNSIGNED
        },
        material_rate : DataTypes.INTEGER,
        unit : { type : DataTypes.STRING, defaultValue : 'g' }
    }, {
        timestamps : true,
        tableName : 'semi_prod_comb',
        classMethods : {
            associate : function(models) {
                SemiProdComb.belongsTo(models.Material, { foreignKey : 'material_id' });
            }
        }
    });

    return SemiProdComb;
}