const express = require('express');
const Deberes = require('./../controllers/Deberes');
const deberes_router = express.Router();

deberes_router.get('/deberes', Deberes.getAllDeberes);
deberes_router.post('/deberes',Deberes.postDeberes);
deberes_router.put('/deberes/:id_deber',Deberes.putDeber);
deberes_router.delete('/deberes/:id_deber',Deberes.destroyerDeber);

module.exports = {
  deberes_router
}
