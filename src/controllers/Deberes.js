const {Deberes} = require('./../config/Sequelize');
const {OP} = require('sequelize');

const getAllDeberes = (req, res)=>{
  Deberes.findAll({
    attributes: {
      exclude:['deu_est','updatedAt']
    },
    where:{
      deu_est:true
    }
  }).then(deberes =>{
    res.status(200).json({
      ok:true,
      contenido: deberes
    })
  });
}

const postDeberes = (req, res)=>{
  let {objDeber} = req.body;
  Deberes.build(objDeber).save().then(deberCreado=>{
    res.status(201).json({
      ok: true,
      contenido: deberCreado,
      mensaje: 'Deber creado'
    })
  }).catch(error=>{
    res.status(500).json({
      ok:false,
      contenido:error,
      mensaje:'Error al guardar'
    })
  });
}

const putDeber = (req,res)=>{
  let {id_deber} =  req.params;
  let {objDeber} = req.body;
  Deberes.findByPk(id_deber).then(deber=>{
    if (deber){
      return Deberes.update(objDeber,{
	where:{deu_id:id_deber}
      })
    } else{
      res.status(404).json({
	ok:false,
	contenido:null,
	mensaje: 'No se encontro el deber a actualizar'
      })
    }
  }).then(deberActualizado=>{
    if(deberActualizado[0]===1){
      res.status(200).json({
	ok:true,
	contenido: deberActualizado,
	mensaje:'Deber actualizado'
      })
    }else{
      res.status(200).json({
	ok:true,
	mensaje: 'Hubo un error al actualizar'
      })
    }
  });
}

const destroyerDeber=(req,res)=>{
  let {id_deber} = req.params;
  Deberes.destroy({
    where:{deu_id:id_deber}
  }).then(deberBorrado=>{
    res.status(200).json({
      ok:true,
      contenido:deberBorrado,
      mensaje:'Deber borraso'
    })
  }).catch(error=>{
    res.status(400).json({
      ok:false,
      contenido:error,
      mensaje:'Error'
    })
  });
}


module.exports = {
  getAllDeberes,
  postDeberes,
  putDeber,
  destroyerDeber
}
