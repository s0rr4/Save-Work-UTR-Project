require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/database');
const reporteRoutes = require('./src/routes/reportes');
const authRoutes = require('./src/routes/authRoutes');
const usuarioRoutes = require('./src/routes/usuario');
const genJWT = require('./src/helpers/genJWT');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

// 🔹 Configuración Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Reportes",
      version: "1.0.0",
      description: "Documentación de tu API 🚀",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"], // donde documentarás
  components: {
  securitySchemes: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      bearerFormat: "JWT"
    }
  }
},
security: [
  {
    bearerAuth: []
  }
]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// 🔹 Ruta Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// 🔹 Tus rutas
app.use('/api/', reporteRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/usuario', usuarioRoutes);

// 🔹 Servidor
app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
  console.log(`Swagger en http://localhost:${PORT}/api-docs`);
});