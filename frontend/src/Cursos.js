import React, { useEffect, useState } from 'react';

function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch('/api/cursos')
      .then(res => res.json())
      .then(data => setCursos(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="section">
      <h2>Cursos Disponibles</h2>
      <ul>
        {cursos.map(curso => (
          <li key={curso.id_personalizado}>
            <strong>ID:</strong> {curso.id_personalizado}<br/>
            <strong>Nombre del Curso:</strong> {curso.nombre_curso}<br/>
            <strong>Créditos:</strong> {curso.creditos}<br/>
            <strong>Horario:</strong> {curso.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cursos;  