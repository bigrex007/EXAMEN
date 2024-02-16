import React, { useState } from 'react';

const  Matriculacion = () => {
  const [estudianteId, setEstudianteId] = useState('');
  const [cursoId, setCursoId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/matricular', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idEstudiante: estudianteId, idCurso: cursoId }),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        setEstudianteId('');
        setCursoId('');
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="section">
      <h2>Matricular Alumno en Clase</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID del Estudiante"
          value={estudianteId}
          onChange={(e) => setEstudianteId(e.target.value)}
        />
        <input
          type="text"
          placeholder="ID del Curso"
          value={cursoId}
          onChange={(e) => setCursoId(e.target.value)}
        />
        <button type="submit">Matricular</button>
      </form>
    </div>
  );
}

export default Matriculacion;