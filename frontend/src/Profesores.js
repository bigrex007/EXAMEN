import React, { useEffect, useState } from 'react';

function Profesores() {
  const [profesores, setProfesores] = useState([]);

  useEffect(() => {
    fetch('/api/profesores')
      .then(res => res.json())
      .then(data => setProfesores(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="section">
      <h2>Profesores</h2>
      <ul>
        {profesores.map(profesor => (
          <li key={profesor.id_personalizado}>
            <strong>ID:</strong> {profesor.id_personalizado}<br/>
            <strong>Nombre:</strong> {profesor.nombre} {profesor.apellido}<br/>
            <strong>Clases:</strong> {profesor.clases.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profesores;