'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CommentLikes', [
      {
        commentId: 7, userId: 16,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 1, userId: 2,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 1, userId: 3,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 1, userId: 4,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 2, userId: 4,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 2, userId: 5,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 2, userId: 6,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 3, userId: 7,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 4, userId: 8,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 5, userId: 9,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 6, userId: 10,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 9, userId: 11,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 10, userId: 12,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 11, userId: 14,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 12, userId: 15,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 14, userId: 16,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 16, userId: 17,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 16, userId: 21,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 17, userId: 18,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 17, userId: 19,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        commentId: 17, userId: 20,
        createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CommentLikes', null, {});
  }
};
