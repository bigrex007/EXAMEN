const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const agregarDatos = require('./agregarBD.js');
const rutas = require('./rutas');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://test:123@testdatabase.oh49bmu.mongodb.net/EXAMEN?retryWrites=true&w=majority', {}).then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api', rutas);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});