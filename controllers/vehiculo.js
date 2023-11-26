const {response} = require('express');

//importacion de los metodos 
const Vehiculo = require('../models/vehiculos');



//consultar para obtener los usuarios en una variable de tipo asincrona 
const vehiculoGet  = async (req, res = response) => {
    // const {nombre} = req.query//desecstructuracion

    //consultar todos los uduarios
    const vehiculos = await Vehiculo.find(); //esto nos da una respuesta

    //convierte los usuarios en json 
    res.json({
        vehiculos
    })
}


const vehiculoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const vehiculo = new Vehiculo(body) //Instanciando el objeto
        await vehiculo.save() //Inserta en la colección
        // res.json(producto);
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}


//Modifcación
const vehiculoPut = async(req, res = response) => {

    const {numero,  placa,  horasReparacion, precioReparacion,  observaciones } = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Vehiculo.updateMany({placa: placa}, 
            { $set: { numero: numero, horasReparacion: horasReparacion, precioReparacion:precioReparacion, observaciones:observaciones }})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const vehiculoDelete = async(req, res) => {

    const {placa} = req.body
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        await Vehiculo.deleteOne({placa: placa})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    vehiculoGet,
    vehiculoPost,
    vehiculoPut,
    vehiculoDelete
}
