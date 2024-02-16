const express = require('express');
const router = express.Router();

const controladores = require('./controladores');

// Ruta para matricular alumnos en clases
router.post('/matricular', controladores.matricularAlumno);

// Ruta para asignar notas a alumnos
router.put('/asignarNota', controladores.asignarNota);

// Ruta para asignar clases a maestros
router.post('/asignarClase', controladores.asignarClaseAProfesor);

// Ruta para listar todos los alumnos con sus clases matriculadas y respectivas notas
router.get('/alumnos', controladores.listarAlumnosConClases);

// Ruta para listar profesores con las clases que imparten
router.get('/profesores', controladores.listarProfesoresConClases);

// Ruta para listar todos los cursos disponibles
router.get('/cursos', controladores.listarCursos);

module.exports = router;