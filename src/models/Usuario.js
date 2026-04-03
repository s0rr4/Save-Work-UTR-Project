const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    lastname: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    role: {
        type: String,
        required: true,
        enum: ['worker', 'supervisor', 'admin'],
        default: 'worker'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("User", usuarioSchema);