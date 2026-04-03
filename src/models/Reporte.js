const mongoose = require("mongoose");

const reporteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
    
}

},{
    timestamps: true //
    });

module.exports = mongoose.model("Reporte", reporteSchema);