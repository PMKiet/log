'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'minhkiet1111@gmail.com',
      passWord: 'admin',
      firstName: 'Phạm',
      lastName: 'Minh Kiệt',
      address: 'An Giang',
      gender: 1,
      roleId: 'R1',
      phonenumber: 23410234,
      positionId: 'doctor',
      image: '',

      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
