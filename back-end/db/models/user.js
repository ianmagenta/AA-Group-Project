'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    password: DataTypes.STRING.BINARY,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
    isAdmin: DataTypes.BOOLEAN
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Story, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });
  };
  return User;
};
