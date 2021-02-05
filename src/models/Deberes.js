const {conexion} =  require('./../config/Sequelize');
const Sequelize = require('sequelize');

const deberes_model = (conexion)=>{
  let deuda = conexion.define(
    'deuda',{
      deu_id:{
	primaryKey:true,
	autoIncrement: true,
	type: Sequelize.INTEGER,
	allownull: false
      },
      deu_con:{
	type: Sequelize.TEXT,
	allownull: false
      },
      deu_est:{
	type: Sequelize.BOOLEAN,
	allownull: false,
	defaultValue: true
      }
    }, {
      tableName: 't_deuda'
    }
  );
  return deuda;
}

module.exports = deberes_model;
