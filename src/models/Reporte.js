const mongoose = require("mongoose");

const reporteSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    prioridad: {
        type: String,
        enum: ["baja", "media", "alta"],
        default: "media"
    }
});

module.exports = mongoose.model("Reporte", reporteSchema);