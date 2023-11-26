const {Router} = require('express')//desecstructuracion extraer un atributo de un objeto 

const route = Router()

//importar metodos del controlador
const {vehiculoGet, vehiculoPost, vehiculoPut, vehiculoDelete} = require('../controllers/vehiculo')

route.get('/', vehiculoGet)
route.post('/', vehiculoPost)
route.put('/', vehiculoPut)
route.delete('/', vehiculoDelete)

module.exports = route