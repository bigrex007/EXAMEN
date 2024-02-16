import React, { useState } from 'react';

function Inscripcion() {
  const [profesorId, setProfesorId] = useState('');
  const [cursoId, setCursoId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/asignarClase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idProfesor: profesorId, idCurso: cursoId }),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        setProfesorId('');
        setCursoId('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="section">
      <h2>Inscribir Profesor en Clase</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID del Profesor"
          value={profesorId}
          onChange={(e) => setProfesorId(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID del Curso"
          value={cursoId}
          onChange={(e) => setCursoId(e.target.value)}
        />
        <button type="submit">Inscribir</button>
      </form>
    </div>
  );
}

export default Inscripcion;