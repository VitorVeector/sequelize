
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Levels extends Model {
        static associate(models) {
            Levels.hasMany(models.Classes, {
                foreignKey: 'level_id'
            })
        }
    }
    Levels.init({
        level_descrip: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Levels',
    });
    return Levels;
};