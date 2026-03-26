const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
    try {
       const {email, password} = req.body

        //User exist?
        let usuario = await Usuario.findOne({email});
        if (usuario) return res.status(400).json({ msg: 'El usuario ya existe'});

        usuario = new Usuario({email, password});

        //Encrypt
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(password,salt);

        await usuario.save();
        res.json(201).json({msg: ''})
    } catch (error) {
        res.status(500).json({error: 'Error al registrar el usuario', errorMSG: error}) //internal server error
        
    }
}

exports.loginUsuario = async (req, res) => {
    try {
        const{email, password} = req.body;
        // Verificar si el usuario existe
        const usuario = await Usuario.findOne({email});
        if (!usuario) return res.status(400).json({msg: 'El usuario no existe'})
        
        // Verificar la password
        const isMatch = await bcrypt.compare(password, usuario.password);
        if(!ismatch) return res.status(400).json({msg: 'La password es incorrecta'})
        
        // Create payload
        const payload = {
            usuario: {
                id: usuario.id,
                email: usuario.email
            }
        };

        // Sign jwt
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {expiresIn: '1h'},
            (error, token) => {
                if (error) throw error;
                res.json({token});
            }
        );
        
    } catch (error) {
        res.status(500).json({error: 'Error en el servidor', errorMSG: error})
    }
}