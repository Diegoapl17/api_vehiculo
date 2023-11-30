const {Router} = require('express')//desecstructuracion extraer un atributo de un objeto 
//import * as buscarUnVehiculo1 from '..controllers/vehiculo.js';


const route = Router()

//importar metodos del controlador
const {vehiculoGet, vehiculoPost, vehiculoPut, vehiculoDelete, buscarUnVehiculo} = require('../controllers/vehiculo')

route.get('/', vehiculoGet)
route.post('/', vehiculoPost)
route.put('/', vehiculoPut)
route.delete('/', vehiculoDelete)
route.get('/:numero', buscarUnVehiculo);

module.exports = route