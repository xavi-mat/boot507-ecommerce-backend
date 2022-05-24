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
    return queryInterface.bulkInsert('products', [
      { name: 'Product 1', price: 11, description: 'Description of product 1',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 2', price: 22, description: 'Description of product 2',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 3', price: 33, description: 'Description of product 3',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 4', price: 44, description: 'Description of product 4',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 5', price: 55, description: 'Description of product 5',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 6', price: 66, description: 'Description of product 6',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 7', price: 77, description: 'Description of product 7',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 8', price: 88, description: 'Description of product 8',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 9', price: 99, description: 'Description of product 9',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 10', price: 10, description: 'Description of product 10',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 11', price: 21, description: 'Description of product 11',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 12', price: 32, description: 'Description of product 12',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 13', price: 43, description: 'Description of product 13',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 14', price: 54, description: 'Description of product 14',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 15', price: 65, description: 'Description of product 15',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 16', price: 76, description: 'Description of product 16',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 17', price: 87, description: 'Description of product 17',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 18', price: 98, description: 'Description of product 18',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 19', price: 19, description: 'Description of product 19',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 20', price: 20, description: 'Description of product 20',createdAt: new Date(), updatedAt: new Date() }
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
