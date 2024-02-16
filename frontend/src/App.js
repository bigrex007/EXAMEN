import React from 'react';
import Estudiantes from './Estudiantes';
import Profesores from './Profesores';
import Cursos from './Cursos';
import Inscripcion from './Inscripcion';
import Matriculacion from './Matriculacion';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de Estudiantes, Profesores y Cursos</h1>
      <Estudiantes />
      <Profesores />
      <Cursos />
      <Inscripcion />
      <Matriculacion />
    </div>
  );
}

export default App;