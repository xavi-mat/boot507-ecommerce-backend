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
    return queryInterface.bulkInsert('details', [
      { OrderID: 1, ProductId: 1, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 2, ProductId: 1, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 3, ProductId: 1, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 4, ProductId: 1, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 5, ProductId: 2, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 6, ProductId: 2, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 7, ProductId: 2, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 8, ProductId: 2, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 9, ProductId: 3, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 10, ProductId: 3, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 1, ProductId: 3, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 2, ProductId: 3, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 3, ProductId: 4, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 4, ProductId: 4, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 5, ProductId: 4, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 6, ProductId: 4, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 7, ProductId: 5, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 8, ProductId: 5, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 9, ProductId: 5, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 10, ProductId: 5, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 1, ProductId: 6, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 2, ProductId: 6, quantity: 1, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 3, ProductId: 6, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 4, ProductId: 6, quantity: 2, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 5, ProductId: 7, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 6, ProductId: 7, quantity: 3, createdAt: new Date(), updatedAt: new Date() },
      { OrderID: 7, ProductId: 7, quantity: 1, createdAt: new Date(), updatedAt: new Date() }
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
