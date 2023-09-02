
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    })

    Users.associate = function (models){
        // Definindo Associação
        Users.hasMany(models.Classes, {
            foreignKey: 'teacher_id'
        }) 
        Users.hasMany(models.Enrollments, {
            foreignKey: 'student_id'
        })
    }

    return Users;
};