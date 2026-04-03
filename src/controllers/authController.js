const User = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
    try {
        const { name, lastname, email, password, role } = req.body;

        // Validación básica
        if (!name || !lastname || !email || !password) {
            return res.status(400).json({ msg: 'Faltan datos' });
        }

        // Verificar si ya existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Crear usuario con TODOS los campos
        user = new User({
            name,
            lastname,
            email,
            password,
            role: role || 'worker'
        });

        // Encriptar password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        return res.status(201).json({
            msg: 'Usuario registrado correctamente'
        });

    } catch (error) {
        console.error("🔥 ERROR REGISTRO:", error);

        return res.status(500).json({
            error: 'Error al registrar el usuario',
            errorMSG: error.message
        });
    }
};

exports.loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validación básica
        if (!email || !password) {
            return res.status(400).json({ msg: 'Faltan datos' });
        }

        // Verificar usuario
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'El usuario no existe' });
        }

        // Verificar password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'La password es incorrecta' });
        }

        // Payload
        const payload = {
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        };

        // Generar JWT
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.json({ token });

    } catch (error) {
        console.error("🔥 ERROR LOGIN:", error);

        return res.status(500).json({
            error: 'Error en el servidor',
            errorMSG: error.message
        });
    }
};