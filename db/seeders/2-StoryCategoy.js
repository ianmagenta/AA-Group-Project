'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StoryCategories', [
      { categoryName: "General Interest", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Sports", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Literature", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Technology", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Movies", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Video Games", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Human Interest", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Pop Culture", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Dance", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Theater", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Agriculture", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Business", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Software", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Strategy", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Politics", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Pets", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Family", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Space", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Manufacturing", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Comedy", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Music", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Journalism", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Local", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "National", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Sales", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Internet", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Games", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Health", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Science", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Food", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Cooking", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Design", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Cryptocurrency", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Productivity", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Relationships", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Marketing", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Drama", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Horror", createdAt: new Date(), updatedAt: new Date() },
      { categoryName: "Art", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StoryCategories', null, {});
  }
};
