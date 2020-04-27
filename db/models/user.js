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
    User.hasMany(models.Story, { foreignKey: 'userId' });
    User.hasMany(models.Comment, { foreignKey: 'userId' });

    const columnMap = {
      foreignKey: 'userId',
      through: 'CommentLikes',
      otherKey: 'commentId'
    };
    User.belongsToMany(models.Comment, columnMap)

    const columnMapping = {
      foreignKey: 'userId',
      through: 'StoryLikes',
      otherKey: 'storyId'
    };
    User.belongsToMany(models.Story, columnMapping)
  };
  return User;
};
