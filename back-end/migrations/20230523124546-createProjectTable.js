'use strict';

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

    await queryInterface.createTable('Projects',{
       id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true       
      },
        projectName:{
          type:DataTypes.STRING,
          allowNull:false
        },
        projectCode:{
          type:DataTypes.STRING,
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

    await queryInterface.dropTable('Projects');
  }
};
