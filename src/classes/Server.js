const express = require('express');
const bodyParser = require('body-parser');
const {conexion} = require('./../config/Sequelize');
const swagger_ui = require('swagger-ui-express');

const {deberes_router} = require('./../routes/Deberes');

class Server {
  constructor(){
    this.app = express();
    this.puerto = process.env.PORT || 5000;
    this.habilitarCORS();
    this.configurarBodyParser();
    this.cargarRutas();
  }
  habilitarCORS(){
    this.app.use((req, res, next)=>{
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
      next();
    });
  }
  configurarBodyParser(){
    this.app.use(bodyParser.json());
  }
  cargarRutas(){
    this.app.get('/',(req,res)=>{
      res.status(200).send("La Api funciona XDXDXDXD");
    });
    this.app.use('/',deberes_router);
  }
  start(){
    this.app.listen(this.puerto, ()=>{
      console.log(`Todo bien con el servidor en el puerto ${this.puerto}`);
      conexion.sync({force:false});
    });
  }
}

module.exports = Server;
