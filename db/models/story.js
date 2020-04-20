'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    subHeading: DataTypes.STRING,
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  Story.associate = function (models) {
    Story.belongsTo(models.User, { foreignKey: 'userId' });
    Story.belongsTo(models.Category, { foreignKey: 'categoryId' })
    Story.hasMany(models.Comment, { foreignKey: 'storyId' });

    // associations can be defined here
    const columnMapping = {
      foreignKey: 'storyId',
      through: 'StoryLikes',
      otherKey: 'userId'
    };
    Story.belongsToMany(models.User, columnMapping)


  };
  return Story;
};
