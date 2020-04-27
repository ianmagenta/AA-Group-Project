'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define('CommentLike', {
    commentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  CommentLike.associate = function (models) {
  };
  return CommentLike;
};
