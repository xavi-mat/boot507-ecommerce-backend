"use strict";

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
    return queryInterface.bulkInsert("categories", [
      {
        name: "Category 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 7",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 11",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 12",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 13",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 14",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Category 15",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
