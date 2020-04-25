'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        storyId: 1, userId: 1,
        body: "So **dark**! So **brooding**!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 5,
        body: "I'm *very* proud of this one!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 1, userId: 6,
        body: "## Keep on writing! Don't stop!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 7,
        body: "I **don't** like this at all.",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 8,
        body: `Everyone says:
        > This is my favorite piece of writing.`,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 2, userId: 9,
        body: "Crazy stuff, man!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 10,
        body: "How orig.",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 4, userId: 11,
        body: "You're such a great writer! Keep up the good work!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 5, userId: 12,
        body: "First!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 5, userId: 13,
        body: "So funny! I laughed **so** hard!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 5, userId: 14,
        body: "I didn't find this *THAT* funny.",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 6, userId: 15,
        body: "Whatever. This story is not that scary.",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 16,
        body: "What are you talking about? This is just random text!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 7, userId: 18,
        body: "Yeah, I'm not sure what's exactly being said here.",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 8, userId: 19,
        body: "Boy, these thoughts sure are general!",
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 8, userId: 20,
        body:
          `- This article is an artistic masterpiece!
- Easily one of the greatest of all time!
          `,
        createdAt: new Date(), updatedAt: new Date()
      },
      {
        storyId: 8, userId: 21,
        body: "I have no idea what is going on in this story.",
        createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
