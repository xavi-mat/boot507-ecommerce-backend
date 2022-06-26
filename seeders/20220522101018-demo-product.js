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
      { name: 'Product 1', price: 11, active:true, description: 'Description of product 1 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.', image: 'f3647c7ef40feb54dd85f30ceef2546c', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 2', price: 22, active:true, description: 'Description of product 2 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.', image: 'd091e08ed268104295734bfa7cb2c2d1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 3', price: 33, active:true, description: 'Description of product 3 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.', image: 'a83c4180a0f1030e7844ab4109607e1c', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 4', price: 44, active:true, description: 'Description of product 4 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 5', price: 55, active:true, description: 'Description of product 5 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 6', price: 66, active:true, description: 'Description of product 6 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 7', price: 77, active:true, description: 'Description of product 7 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 8', price: 88, active:true, description: 'Description of product 8 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 9', price: 99, active:true, description: 'Description of product 9 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 10', price: 10, active:true, description: 'Description of product 10 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 11', price: 21, active:true, description: 'Description of product 11 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 12', price: 32, active:true, description: 'Description of product 12 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 13', price: 43, active:true, description: 'Description of product 13 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 14', price: 54, active:true, description: 'Description of product 14 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 15', price: 65, active:true, description: 'Description of product 15 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 16', price: 76, active:true, description: 'Description of product 16 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 17', price: 87, active:true, description: 'Description of product 17 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 18', price: 98, active:true, description: 'Description of product 18 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 19', price: 19, active:true, description: 'Description of product 19 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() },
      { name: 'Product 20', price: 20, active:true, description: 'Description of product 20 Lorem fistrum torpedo fistro ese que llega mamaar te voy a borrar el cerito amatomaa va usté muy cargadoo. Te voy a borrar el cerito a gramenawer por la gloria de mi madre por la gloria de mi madre.',createdAt: new Date(), updatedAt: new Date() }
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
