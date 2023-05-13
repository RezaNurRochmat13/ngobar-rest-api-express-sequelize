'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Movies', [
      {
        title: 'Harry Potter',
        genre: 'Sci-Fi',
        year: '2006',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Interstellar',
        genre: 'Sci-Fi',
        year: '2006',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Nun',
        genre: 'Sci-Fi',
        year: '2006',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Conjuring',
        genre: 'Sci-Fi',
        year: '2006',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
