'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        name: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        email: DataTypes.STRING,
        role: DataTypes.STRING
    })

    Users.associate = function (models){
        
    }
    return Users;
};