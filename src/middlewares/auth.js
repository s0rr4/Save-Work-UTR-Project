const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(401).json({ msg: 'no hay token, permiso denegado' });
    }

    try {
        // 👇 separar "Bearer TOKEN"
        const token = authHeader.split(' ')[1];

        const cifrado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = cifrado.usuario;

        next();
    } catch (error) {
        console.log(error.message); // 🔥 para debug real
        res.status(401).json({ msg: 'Token no valido' });
    }
};