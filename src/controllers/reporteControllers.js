const Reporte = require("../models/Reporte");

exports.getReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find(); 
        res.json(reportes); 
    } catch (error) {
        res.status(500).json({error:"Error: Get reports", message:error})
    }
}

exports.getReporteById = async (req, res) => {
    try {
        const { id } = req.params;
        const reporte = await Reporte.findOne({ _id: id });
        
        if (!reporte) {
            return res.status(404).json({ error: "Reporte no encontrado" });
        }
        
        res.json(reporte);
    } catch (error) {
        res.status(500).json({ error: "Error: Get report by id", message: error });
    }
}

exports.createReporte = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;

        if (!titulo || !descripcion) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        let prioridad = "media";

        if (
            descripcion.toLowerCase().includes('fuego') ||
            descripcion.toLowerCase().includes('incendio')
        ) {
            prioridad = "alta";
        }

        const nuevoReporte = new Reporte({
            titulo,
            descripcion,
            prioridad
        });

        await nuevoReporte.save();

        return res.status(201).json({
            msg: "Reporte creado",
            reporte: nuevoReporte
        });

    } catch (error) {
        console.error("🔥 ERROR CREATE:", error);

        res.status(400).json({
            error: "Error: Create reports",
            message: error.message
        });
    }
};

exports.updateReporte = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descripcion, ubicacion, prioridad, estado } = req.body;

        const reporteActualizado = await Reporte.findByIdAndUpdate(
            id,
            { titulo, descripcion, ubicacion, prioridad, estado },
            { new: true, runValidators: true }
        );

        if (!reporteActualizado) {
            return res.status(404).json({ error: "Reporte no encontrado" });
        }

        res.json(reporteActualizado);
    } catch (error) {
        res.status(400).json({ error: "Error: Update report", message: error });
    }
}

exports.deleteReporte = async (req, res) => {
    try {
        const { id } = req.params;

        const reporteEliminado = await Reporte.findByIdAndDelete(id);

        if (!reporteEliminado) {
            return res.status(404).json({ error: "Reporte no encontrado" });
        }

        res.json({ message: "Reporte eliminado correctamente", reporte: reporteEliminado });
    } catch (error) {
        res.status(400).json({ error: "Error: Delete report", message: error });
    }
}
