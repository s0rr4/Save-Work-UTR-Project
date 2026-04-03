const Reporte = require("../models/Reporte");

exports.getReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find()
            .populate('user', 'name lastname email'); // 👈 aquí

        res.json(reportes); 
    } catch (error) {
        res.status(500).json({error:"Error: Get reports", message:error})
    }
}

exports.getReporteById = async (req, res) => {
    try {
        const { id } = req.params;
        const reporte = await Reporte.findById(id)
    .populate('user', 'name lastname email');
        
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
        let { title, description, priority } = req.body;

        if (!title || !description) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        if (
            description.toLowerCase().includes('fuego') ||
            description.toLowerCase().includes('incendio')
        ) {
            priority = "high";
        }

        const nuevoReporte = new Reporte({
            title,
            description,
            priority,
            user: req.user.id // 👈 aquí guardas el ID del usuario
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
        const { title, description, priority } = req.body;

        const reporteActualizado = await Reporte.findByIdAndUpdate(
            id,
            { title, description, priority },
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
