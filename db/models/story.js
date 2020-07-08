'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    subHeading: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    isFeatured: DataTypes.BOOLEAN
  }, {});
  Story.associate = function (models) {
    Story.belongsTo(models.User, { foreignKey: 'userId' });
    Story.belongsTo(models.StoryCategory, { foreignKey: 'categoryId' })
    const columnMapping = {
      foreignKey: 'storyId',
      through: 'StoryLikes',
      otherKey: 'userId'
    };
    Story.belongsToMany(models.User, columnMapping)

  };
  return Story;
};
