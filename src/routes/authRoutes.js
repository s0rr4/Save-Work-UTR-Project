const express = require('express');
const router = express.Router();
const genJWT = require('../helpers/genJWT');

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Autenticación de usuarios
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Valida credenciales y retorna un JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: jaredrodriguezteamo@gmail.com
 *               password:
 *                 type: string
 *                 example: teamomeri
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Login correcto
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Datos incompletos o body no enviado
 *       401:
 *         description: Credenciales incorrectas
 */
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