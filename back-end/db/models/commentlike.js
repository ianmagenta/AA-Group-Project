'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define('CommentLike', {
    storyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  CommentLike.associate = function (models) {
    // associations can be defined here
  };
  return CommentLike;
};
