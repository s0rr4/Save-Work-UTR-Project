const express = require('express');
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * tags:
 *   name: Usuario
 *   description: Gestión de usuarios
 */

/**
 * @swagger
 * /api/usuario/register:
 *   post:
 *     summary: Registrar usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - lastname
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Gael"
 *               lastname:
 *                 type: string
 *                 example: "Ruiz"
 *               email:
 *                 type: string
 *                 example: "correo@email.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               role:
 *                 type: string
 *                 example: "user"
 *     responses:
 *       201:
 *         description: Usuario registrado
 *       400:
 *         description: Error en los datos
 */
router.post('/register', authController.registrarUsuario);

/**
 * @swagger
 * /api/usuario/login:
 *   post:
 *     summary: Login de usuario
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               email: "correo@email.com"
 *               password: "123456"
 *     responses:
 *       200:
 *         description: Login exitoso
 */
router.post('/login', authController.loginUsuario);

module.exports = router;