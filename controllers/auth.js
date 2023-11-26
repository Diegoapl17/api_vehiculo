const Producto = require('../models/vehiculos')
const bcrypt = require('bcrypt') //encriptar
const { generarJWT } = require('../helpers/generar_jwt')
const jwt = require('jsonwebtoken');

// async function verificarPermisos(usuario)