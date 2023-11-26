const express = require('express');
require('dotenv').config()//importar paquete 
const Server = require('./models/server')

const server = new Server()//instanciar el objeto

server.app.use(express.json());

server.listen()//escuchar las peticiones del servidor para saber si funciona Servidor local iniciarlo

