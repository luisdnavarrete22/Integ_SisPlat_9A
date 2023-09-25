const {Schema, model, Types} = require('mongoose')


HabSchema = Schema({ // definicion de los atributos de la tabla de citas
    Numero_habitacion:{
        type: String,
        require: true
    },
    Cantidad_cuartos:{
        type: Number,
        require: true
    },
    Tipo_habitacion:{
        type: String,
        require: true
    },
    precio_habitacion: {
        type: Number,
        require: true
    },
    Descripcion_habitacion:{
        type: String,
        require: true
    }
});


module.exports= model('habitacion', HabSchema)