'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryLike = sequelize.define('StoryLike', {
    storyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  StoryLike.associate = function (models) {
    // associations can be defined here
  };
  return StoryLike;
};
