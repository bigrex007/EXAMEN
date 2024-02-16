const { Estudiante, Profesor, Curso, Matricula, Imparticion } = require('./modelos.js');

const matricularAlumno = async (req, res) => {
  try {
    const { idEstudiante, idCurso } = req.body;

    const estudiante = await Estudiante.findOne({ id_personalizado: idEstudiante });
    const curso = await Curso.findOne({ id_personalizado: idCurso });

    if (!estudiante || !curso) {
      return res.status(404).json({ message: 'Estudiante o curso no encontrado' });
    }

    const matricula = new Matricula({
      estudiante: estudiante.id_personalizado,
      curso: curso.id_personalizado
    });

    await matricula.save();

    res.status(201).json({ message: 'Alumno matriculado con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al matricular al alumno', error });
  }
};

const asignarNota = async (req, res) => {
  try {
    const { idEstudiante, idCurso, notaFinal } = req.body;

    const estudiante = await Estudiante.findOne({ id_personalizado: idEstudiante });
    const curso = await Curso.findOne({ id_personalizado: idCurso });

    if (!estudiante || !curso) {
      return res.status(404).json({ message: 'Estudiante o curso no encontrado' });
    }

    const matricula = await Matricula.findOne({ estudiante: estudiante.id_personalizado, curso: curso.id_personalizado });

    if (!matricula) {
      return res.status(404).json({ message: 'Matrícula no encontrada' });
    }

    matricula.nota_final = notaFinal;
    await matricula.save();

    res.status(200).json({ message: 'Nota asignada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al asignar la nota', error });
  }
};

const asignarClaseAProfesor = async (req, res) => {
  try {
    const { idProfesor, idCurso } = req.body;

    const profesor = await Profesor.findOne({ id_personalizado: idProfesor });
    const curso = await Curso.findOne({ id_personalizado: idCurso });

    if (!profesor || !curso) {
      return res.status(404).json({ message: 'Profesor o curso no encontrado' });
    }

    const imparticion = new Imparticion({
      profesor: profesor.id_personalizado,
      curso: curso.id_personalizado
    });

    await imparticion.save();

    res.status(201).json({ message: 'Clase asignada al profesor con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al asignar la clase al profesor', error });
  }
};

const listarAlumnosConClases = async (req, res) => {
  try {
    const matriculas = await Matricula.find();
    const estudiantesConClases = {};

    for (const matricula of matriculas) {
      const estudiante = await Estudiante.findOne({ id_personalizado: matricula.estudiante });
      const curso = await Curso.findOne({ id_personalizado: matricula.curso });

      if (!estudiante || !curso) {
        continue; // Si no se encuentra el estudiante o el curso, se salta esta iteración
      }

      const estudianteId = estudiante.id_personalizado;
      if (!estudiantesConClases[estudianteId]) {
        estudiantesConClases[estudianteId] = {
          ...estudiante.toObject(),
          clases: []
        };
      }
      estudiantesConClases[estudianteId].clases.push({
        curso: curso.nombre_curso,
        nota: matricula.nota_final
      });
    }

    res.status(200).json(Object.values(estudiantesConClases));
  } catch (error) {
    res.status(500).json({ message: 'Error al listar los alumnos', error });
  }
};

const listarProfesoresConClases = async (req, res) => {
  try {
    const imparticiones = await Imparticion.find();
    const profesoresConClases = {};

    for (const imparticion of imparticiones) {
      const profesor = await Profesor.findOne({ id_personalizado: imparticion.profesor });
      const curso = await Curso.findOne({ id_personalizado: imparticion.curso });

      if (!profesor) {
        continue; // Si no se encuentra el profesor o el curso, se salta esta iteración
      }

      const profesorId = profesor.id_personalizado;
      if (!profesoresConClases[profesorId]) {
        profesoresConClases[profesorId] = {
          ...profesor.toObject(),
          clases: []
        };
      }
      profesoresConClases[profesorId].clases.push(curso.nombre_curso);
    }

    res.status(200).json(Object.values(profesoresConClases));
  } catch (error) {
    res.status(500).json({ message: 'Error al listar los profesores', error });
  }
};

const listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.find();
    res.status(200).json(cursos);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar los cursos', error });
  }
};

module.exports = { matricularAlumno, asignarNota, asignarClaseAProfesor, listarAlumnosConClases, listarProfesoresConClases, listarCursos }