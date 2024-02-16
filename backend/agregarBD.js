const { Estudiante, Profesor, Curso } = require('./modelos.js');

const agregarDatos = async () => {
  // Agregar profesores con datos más aleatorios
  const nombresProfesores = ['Ana', 'Carlos', 'María', 'Juan', 'Luisa'];
  const apellidosProfesores = ['González', 'Pérez', 'Rodríguez', 'López', 'Martínez'];
  const especialidades = ['Matemáticas', 'Historia', 'Biología', 'Física', 'Literatura'];

  for (let i = 0; i < 5; i++) {
    await Profesor.create({
      id_personalizado: `PROF-${i + 1}`,
      nombre: nombresProfesores[i],
      apellido: apellidosProfesores[i],
      direccion: `Calle ${i + 1}, Ciudad`,
      telefono: `12345678${i + 1}`,
      email: `profesor${i + 1}@correo.com`,
      especialidad: especialidades[i]
    });
  }

  // Agregar cursos con nombres aleatorios
  const nombresCursos = ['Álgebra', 'Geografía', 'Química', 'Literatura Española', 'Física Cuántica'];
  for (let i = 0; i < 3; i++) {
    await Curso.create({
      id_personalizado: `CURSO-${i + 1}`,
      nombre_curso: nombresCursos[i],
      creditos: Math.floor(Math.random() * 10) + 1,
      horario: `Horario ${i + 1}`
    });
  }

  // Agregar estudiantes con datos más aleatorios
  const nombresEstudiantes = ['Laura', 'Miguel', 'Sofía', 'Daniel', 'Andrea', 'David', 'Sara', 'Jorge', 'Elena', 'Roberto'];
  const apellidosEstudiantes = ['Fernández', 'Martín', 'García', 'Díaz', 'Ruiz', 'Moreno', 'Jiménez', 'Sánchez', 'Romero', 'Navarro'];
  const carreras = ['Ingeniería', 'Medicina', 'Derecho', 'Psicología', 'Arquitectura', 'Economía', 'Filosofía', 'Biología', 'Matemáticas', 'Física'];

  for (let i = 0; i < 10; i++) {
    await Estudiante.create({
      id_personalizado: `EST-${i + 1}`,
      nombre: nombresEstudiantes[i],
      apellido: apellidosEstudiantes[i],
      direccion: `Avenida ${i + 1}, Ciudad`,
      telefono: `98765432${i + 1}`,
      email: `estudiante${i + 1}@correo.com`,
      fecha_nacimiento: new Date(1990 + i, i, i + 1),
      genero: i % 2 === 0 ? 'Masculino' : 'Femenino',
      carrera: carreras[i]
    });
  }

  console.log('Datos agregados correctamente');
};

module.exports = agregarDatos;