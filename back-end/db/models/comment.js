'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    storyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    body: DataTypes.TEXT
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Story, { foreignKey: 'storyId' });
    // associations can be defined here
  };
  return Comment;
};
