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
 *             example:
 *               nombre: "Gael"
 *               email: "correo@email.com"
 *               password: "123456"
 *     responses:
 *       201:
 *         description: Usuario registrado
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