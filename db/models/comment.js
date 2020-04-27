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
    const columnMap = {
      foreignKey: 'commentId',
      through: 'CommentLikes',
      otherKey: 'userId'
    };
    Comment.belongsToMany(models.User, columnMap)
  };
  return Comment;
};
