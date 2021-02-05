const Sequelize = require('sequelize')
const deberes_model = require('./../models/Deberes');

const conexion = new Sequelize('7KbEzvRK6t','7KbEzvRK6t','TProY8nCmu',{
  host: 'remotemysql.com',
  dialect: 'mysql',
  dialectOptions:{
    useUTC: false,
    dateStrings:true,
    typeCast:true
  },
  timezone:'-05:00'
});

const Deberes = deberes_model(conexion);

module.exports = {
  conexion,
  Deberes
}
