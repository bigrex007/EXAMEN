const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  id_personalizado: {
    type: String,
    required: true,
    unique: true
  },
  nombre: String,
  apellido: String,
  direccion: String,
  telefono: String,
  email: String,
  fecha_nacimiento: Date,
  genero: String,
  carrera: String
});

const profesorSchema = new mongoose.Schema({
  id_personalizado: {
    type: String,
    required: true,
    unique: true
  },
  nombre: String,
  apellido: String,
  direccion: String,
  telefono: String,
  email: String,
  especialidad: String
});

const cursoSchema = new mongoose.Schema({
  id_personalizado: {
    type: String,
    required: true,
    unique: true
  },
  nombre_curso: String,
  creditos: Number,
  horario: String
});

const matriculaSchema = new mongoose.Schema({
  estudiante: {
    type: String,
    ref: 'Estudiante'
  },
  curso: {
    type: String,
    ref: 'Curso'
  },
  nota_final: Number
});

const imparticionSchema = new mongoose.Schema({
  profesor: {
    type: String,
    ref: 'Profesor'
  },
  curso: {
    type: String,
    ref: 'Curso'
  }
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);
const Profesor = mongoose.model('Profesor', profesorSchema);
const Curso = mongoose.model('Curso', cursoSchema);
const Matricula = mongoose.model('Matricula', matriculaSchema);
const Imparticion = mongoose.model('Imparticion', imparticionSchema);

module.exports = {
  Estudiante,
  Profesor,
  Curso,
  Matricula,
  Imparticion
};
