'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryCategory = sequelize.define('StoryCategory', {
    categoryName: DataTypes.STRING
  }, {});
  StoryCategory.associate = function (models) {
    StoryCategory.hasMany(models.Story, { foreignKey: 'storyId' });
    // associations can be defined here
  };
  return StoryCategory;
};
