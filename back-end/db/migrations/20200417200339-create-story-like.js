'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StoryLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Stories" }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => queryInterface.addConstraint('StoryLikes', ['storyId', 'userId'], {
      type: 'unique',
      name: ''
    }));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('StoryLikes');
  }
};
