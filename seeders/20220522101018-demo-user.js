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
        return queryInterface.bulkInsert('users', [
            { username: 'johndoe1', firstName: 'John1', lastName: 'Doe1', email: 'john@doe1.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe2', firstName: 'John2', lastName: 'Doe2', email: 'john@doe2.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe3', firstName: 'John3', lastName: 'Doe3', email: 'john@doe3.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe4', firstName: 'John4', lastName: 'Doe4', email: 'john@doe4.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe5', firstName: 'John5', lastName: 'Doe5', email: 'john@doe5.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe6', firstName: 'John6', lastName: 'Doe6', email: 'john@doe6.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe7', firstName: 'John7', lastName: 'Doe7', email: 'john@doe7.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe8', firstName: 'John8', lastName: 'Doe8', email: 'john@doe8.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            { username: 'johndoe9', firstName: 'John9', lastName: 'Doe9', email: 'john@doe9.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe10', firstName: 'John10', lastName: 'Doe10', email: 'john@doe10.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe11', firstName: 'John11', lastName: 'Doe11', email: 'john@doe11.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe12', firstName: 'John12', lastName: 'Doe12', email: 'john@doe12.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe13', firstName: 'John13', lastName: 'Doe13', email: 'john@doe13.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe14', firstName: 'John14', lastName: 'Doe14', email: 'john@doe14.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe15', firstName: 'John15', lastName: 'Doe15', email: 'john@doe15.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe16', firstName: 'John16', lastName: 'Doe16', email: 'john@doe16.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe17', firstName: 'John17', lastName: 'Doe17', email: 'john@doe17.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe18', firstName: 'John18', lastName: 'Doe18', email: 'john@doe18.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe19', firstName: 'John19', lastName: 'Doe19', email: 'john@doe19.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe20', firstName: 'John20', lastName: 'Doe20', email: 'john@doe20.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe21', firstName: 'John21', lastName: 'Doe21', email: 'john@doe21.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe22', firstName: 'John22', lastName: 'Doe22', email: 'john@doe22.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe23', firstName: 'John23', lastName: 'Doe23', email: 'john@doe23.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe24', firstName: 'John24', lastName: 'Doe24', email: 'john@doe24.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
            // { username: 'johndoe25', firstName: 'John25', lastName: 'Doe25', email: 'john@doe25.com', password: '123456.HASH', role: 'user', createdAt: new Date(), updatedAt: new Date() },
        ]);
    },

    async down(queryInterface, Sequelize) {
    }
};
