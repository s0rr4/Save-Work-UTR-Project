const express = require('express');
const router = express.Router();
const reportController = require("../controllers/reporteControllers");
const auth = require('../middlewares/auth');

/**
 * @swagger
 * tags:
 *   name: Reportes
 *   description: Gestión de reportes
 */

/**
 * @swagger
 * /api/getAllReports:
 *   get:
 *     summary: Obtener todos los reportes
 *     tags: [Reportes]
 *     responses:
 *       200:
 *         description: Lista de reportes
 */
router.get('/getAllReports', reportController.getReportes);

/**
 * @swagger
 * /api/getReport/{id}:
 *   get:
 *     summary: Obtener un reporte por ID
 *     tags: [Reportes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del reporte
 *     responses:
 *       200:
 *         description: Reporte encontrado
 *       404:
 *         description: Reporte no encontrado
 */
router.get('/getReport/:id', reportController.getReporteById);

/**
 * @swagger
 * /api/createReports:
 *   post:
 *     summary: Crear un nuevo reporte
 *     tags: [Reportes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               title: "Reporte de prueba"
 *               description: "Descripción del reporte"
 *               priority: "medium"
 *     responses:
 *       201:
 *         description: Reporte creado
 *       401:
 *         description: No autorizado
 */
router.post('/createReports', auth, reportController.createReporte);

/**
 * @swagger
 * /api/updateReport/{id}:
 *   put:
 *     summary: Actualizar un reporte
 *     tags: [Reportes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               title: "Nuevo título"
 *               description: "Nueva descripción"
 *              priority: "Nueva prioridad"
 *     responses:
 *       200:
 *         description: Reporte actualizado
 *       401:
 *         description: No autorizado
 */
router.put('/updateReport/:id', auth, reportController.updateReporte);

/**
 * @swagger
 * /api/deleteReport/{id}:
 *   delete:
 *     summary: Eliminar un reporte
 *     tags: [Reportes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reporte eliminado
 *       401:
 *         description: No autorizado
 */
router.delete('/deleteReport/:id', auth, reportController.deleteReporte);

module.exports = router;