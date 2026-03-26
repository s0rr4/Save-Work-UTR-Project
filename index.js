require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database')
const reporteRoutes = require('./src/routes/reportes')
const authRoutes = require('./src/routes/authRoutes');
const usuarioRoutes = require('./src/routes/usuario')
const genJWT = require('./src/helpers/genJWT');
//const{createClient}= require('@supabase/supabase-js');

const app= express();
const PORT = process.env.PORT || 3000;

//Supabase connection
// supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(express.json()); // Comunicacion json

connectDB(); // Conexion a base de datos

app.use('/api/',reporteRoutes); //Disponibles todas las rutas

app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`);
});

app.use('/api/usuario', usuarioRoutes);