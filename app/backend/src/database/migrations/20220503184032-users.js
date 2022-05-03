'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Users = queryInterface.createTable("users", {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      }
    })
    return Users;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');

  }
};
