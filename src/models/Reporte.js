const mongoose = require("mongoose");

const reporteSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required : true
    },
     descripcion:{
        type:String,
        required : true
    },
     ubicacion:{
        type:String,
        required : true
    },
     prioridad:{
        type:String,
        enum:["baja","media","alta"],
        default:"media"
    },
     estado:{
        type:String,
        default:"abierto"
    },
     fechaCreacion:{
        type:Date,
        default:Date.now()   
    }
});

module.export = mongoose.model("Reporte", reporteSchema);
