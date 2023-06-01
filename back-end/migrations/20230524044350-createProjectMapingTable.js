'use strict';

const { timeStamp } = require('console');
const { database } = require('pg/lib/defaults');
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('ProjectMappings',{
      employeeId:{
        type:Sequelize.INTEGER,
        references:{
          model:'Employees',
          key:'id'
        },
        allowNull:true
      },
      projectId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:'Projects',
          key:'id'
        },
        
      },
      createdAt:{
        type:DataTypes.DATE,
        allowNull:true,
      },
      updatedAt:{
        type:DataTypes.DATE,
        allowNull:true
      }
    
      
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('ProjectMappings');
  }
};
