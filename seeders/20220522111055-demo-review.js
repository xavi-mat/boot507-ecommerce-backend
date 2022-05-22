'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('reviews', [
      { UserId: 1, ProductId: 1, content: "No tá mú güeno", stars: 2, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 2, ProductId: 2, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 3, ProductId: 3, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 4, ProductId: 4, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 5, ProductId: 5, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 6, ProductId: 6, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 7, ProductId: 7, content: "No tá mú güeno", stars: 2, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 8, ProductId: 1, content: "Tá güeno", stars: 5, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 9, ProductId: 2, content: "Tá mú güeno", stars: 5, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 1, ProductId: 3, content: "No tá güeno", stars: 1, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 2, ProductId: 4, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 3, ProductId: 5, content: "No tá güeno", stars: 1, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 4, ProductId: 6, content: "No tá mú güeno", stars: 2, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 5, ProductId: 7, content: "No tá güeno", stars: 1, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 6, ProductId: 1, content: "No tá güeno", stars: 1, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 7, ProductId: 2, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 8, ProductId: 3, content: "Tá mú güeno", stars: 4, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 9, ProductId: 4, content: "Tá mú güeno", stars: 4, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 1, ProductId: 5, content: "No tá mú güeno", stars: 2, createdAt: new Date(), updatedAt: new Date() },
      { UserId: 2, ProductId: 6, content: "Tá güeno", stars: 3, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
