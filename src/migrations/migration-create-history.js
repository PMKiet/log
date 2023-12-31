'use strict';
module.exports = {
     up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('History', {
               id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
               },
               patientid: {
                    type: Sequelize.STRING
               },
               doctorid: {
                    type: Sequelize.STRING
               },
               description: {
                    type: Sequelize.TEXT
               },
               files: {
                    type: Sequelize.STRING
               },


               createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
               },
               updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
               }
          });
     },
     down: async (queryInterface, Sequelize) => {
          await queryInterface.dropTable('History');
     }
};