import React from 'react';
import './App.css';

export default function Movie({ name, director, color, year, deleteMovie }) {
  return (
    <div onClick={() => deleteMovie ? deleteMovie(name) : null} className='items' style={{ background: color }}>
      <h3>{name}</h3>
      <p>By: {director}</p>
      <p>made in {year}</p>
    </div>
  );
}
