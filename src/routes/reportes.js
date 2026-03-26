const express = require('express');
const router = express.Router();
const reportController = require("../controllers/reporteControllers");
const auth = require('../middlewares/auth');

// http://localhost:3000/api/getAllReports
// http://localhost:3000/api/createReports
// http://localhost:3000/api/getReport/:id
// http://localhost:3000/api/updateReport/:id
// http://localhost:3000/api/deleteReport/:id

//GET - Obtener todos los reportes
router.get('/getAllReports', reportController.getReportes);

//GET - Obtener reporte por ID
router.get('/getReport/:id', reportController.getReporteById);

//POST - Crear nuevo reporte
router.post('/createReports', auth, reportController.createReporte);

//PUT - Actualizar reporte
router.put('/updateReport/:id', auth, reportController.updateReporte);

//DELETE - Eliminar reporte
router.delete('/deleteReport/:id', auth, reportController.deleteReporte);

module.exports = router;
