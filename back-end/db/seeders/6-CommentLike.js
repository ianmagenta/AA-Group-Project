'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CommentLikes', [

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CommentLikes', null, {});
  }
};
