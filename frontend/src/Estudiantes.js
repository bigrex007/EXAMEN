import React, { useEffect, useState } from 'react';

function Estudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    fetch('/api/alumnos')
      .then(res => res.json())
      .then(data => setEstudiantes(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="section">
      <h2>Estudiantes</h2>
      <ul>
        {estudiantes.map(estudiante => (
          <li key={estudiante.id_personalizado}>
            <strong>ID:</strong> {estudiante.id_personalizado}<br/>
            <strong>Nombre:</strong> {estudiante.nombre} {estudiante.apellido}<br/>
            <strong>Clases:</strong> {estudiante.clases.map(clase => clase.curso).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Estudiantes;