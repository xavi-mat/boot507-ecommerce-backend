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
    return queryInterface.bulkInsert('orders', [
      { date: '2022-05-01 01:01:01', status: 'sent', UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-02 01:01:01', status: 'paid', UserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-03 01:01:01', status: 'sent', UserId: 3, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-04 01:01:01', status: 'delivered', UserId: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-05 01:01:01', status: 'delivered', UserId: 5, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-06 01:01:01', status: 'cancelled', UserId: 6, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-07 01:01:01', status: 'paid', UserId: 7, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-08 01:01:01', status: 'sent', UserId: 8, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-09 01:01:01', status: 'open', UserId: 9, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-10 01:01:01', status: 'open', UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-11 01:01:01', status: 'delivered', UserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-12 01:01:01', status: 'paid', UserId: 3, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-13 01:01:01', status: 'open', UserId: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-14 01:01:01', status: 'sent', UserId: 5, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-15 01:01:01', status: 'open', UserId: 6, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-16 01:01:01', status: 'cancelled', UserId: 7, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-17 01:01:01', status: 'paid', UserId: 8, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-18 01:01:01', status: 'open', UserId: 9, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-19 01:01:01', status: 'delivered', UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-20 01:01:01', status: 'sent', UserId: 2, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-21 01:01:01', status: 'open', UserId: 3, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-22 01:01:01', status: 'paid', UserId: 4, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-23 01:01:01', status: 'open', UserId: 5, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-24 01:01:01', status: 'open', UserId: 6, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-25 01:01:01', status: 'cancelled', UserId: 7, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-26 01:01:01', status: 'sent', UserId: 8, createdAt: new Date(), updatedAt: new Date() },
      { date: '2022-05-27 01:01:01', status: 'paid', UserId: 9, createdAt: new Date(), updatedAt: new Date() }
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
