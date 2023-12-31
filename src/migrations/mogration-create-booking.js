'use strict';
module.exports = {
     up: async (queryInterface, Sequelize) => {
          await queryInterface.createTable('Booking', {
               id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
               },
               Allcode: {
                    type: Sequelize.STRING
               },
               doctorId: {
                    type: Sequelize.STRING
               },
               patientid: {
                    type: Sequelize.STRING
               },
               date: {
                    type: Sequelize.DATE
               },
               timeType: {
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
          await queryInterface.dropTable('Booking');
     }
};