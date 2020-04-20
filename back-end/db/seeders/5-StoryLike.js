'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StoryLikes', [

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StoryLikes', null, {});
  }
};
