'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StoryLikes', [
      {
        storyId: 1, userId: 1,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 2,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 3,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 4,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 1,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 5,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 25,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 6,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 1,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 7,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 8,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 9,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 10,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 11,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 5, userId: 12,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 5, userId: 13,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 5, userId: 14,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 6, userId: 15,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 16,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 17,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 1,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 18,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 5,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 19,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 8, userId: 20,
        createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StoryLikes', null, {});
  }
};
