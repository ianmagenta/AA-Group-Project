'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryLike = sequelize.define('StoryLike', {
    storyId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  StoryLike.associate = function (models) {
    StoryLike.belongsTo(models.Story, { foreignKey: "storyId" })
  };
  return StoryLike;
};
