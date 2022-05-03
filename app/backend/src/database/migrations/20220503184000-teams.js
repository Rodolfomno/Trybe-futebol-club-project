'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const Teams = queryInterface.createTable("teams", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      team_name: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    })
    return Teams;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};
