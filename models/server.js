
const express = require('express') // permite ejecutar el servidor de node
const cookieParser = require('cookie-parser')//cuando trabajamos con cookis guardar variables temporalmente en el navegador
const cors = require('cors') //implementar seguridad
const bodyParser= require('body-parser')//recibir peticiones desde un formulario
const { dbConnection } = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT //capturando variables
        this.productoPath = '/api/vehiculo' //Ruta Pública esta es la ruta que el usuari ve en el navegador
        this.middlewares()
        this.conectarDB()
        this.routes()
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(cookieParser()); 
        this.app.use(express.static(__dirname + "/public"));
        this.app.use( cors() );
        this.app.use(bodyParser.json()) // for parsing application/json
    }

    routes() {
        this.app.use(this.productoPath, require('../routes/vehiculos'))
    }

    async conectarDB(){
        await dbConnection()//eperar la respuesta del servidor
    } 
}
 

// exportar la cadena de conexion
module.exports = Server