const express = require('express');
const router = express.Router();
const genJWT = require('../helpers/genJWT');

router.post('/login', (req, res) => {
    console.log("Body recibido:", req.body);
    if (!req.body) {
        return res.status(400).json({ msg: "No se recibió body" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Faltan datos" });
    }

    if (email === "jaredrodriguezteamo@gmail.com" && password === "teamomeri") {

        const token = genJWT(email);

        return res.json({
            msg: "Login correcto",
            token
        });
    }

    res.status(401).json({
        msg: "Credenciales incorrectas"
    });
});
module.exports = router;