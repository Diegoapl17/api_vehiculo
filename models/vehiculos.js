const {Schema, model} = require('mongoose')

const VehiculoSchema = ({
    numero:{
        type: Number,
        unique:true
    },
    placa:{
        type: Number,
        unique:true
    },
    horasReparacion:{
        type: Number,
        required:[true,'Las horas de reparacion son obligatorias'] 
    },
    precioReparacion:{
        type:Number,
        required :[true,'El precio de reparacion es obligatorio'] 
    },
    observaciones:{
        type: Number,
        required:[true,'La observacion es obligatoria'] 
    }
})

//Exportar la funcion  UsuariosSchema
module.exports = model ('Vehiculo',VehiculoSchema)