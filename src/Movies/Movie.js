import React from 'react';
import '../App.css';

export default function Movie({ name, director, color, year, deleteMovie }) {
  return (
    <div onClick={() => deleteMovie(name)} className='items' style={{ background: color }}>
      <p>{name}</p>
      <p>By: {director}</p>
      <p>made in {year}</p>
    </div>
  );
}
