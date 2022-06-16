import React from 'react';

export default function MovieForm({ movieTitle, setMovieTitle, 
  movieDirector, setMovieDirector, movieColor, 
  setMovieColor, movieYear, setMovieYear }) {
  return (
    <div className='movieFormContainer'>
      <form className='movieForm'>
        <label>
                Title:
          <input value={movieTitle} onChange={e => setMovieTitle(e.target.value)} />
        </label>
        <label>
                Director:
          <input value={movieDirector} onChange={e => setMovieDirector(e.target.value)} />
        </label>
        <label>
                Year:
          <input value={movieYear} onChange={e => setMovieYear(e.target.value)} />
        </label>
        <label>
                Genre Color:
          <input value={movieColor} onChange={e => setMovieColor(e.target.value)} />
        </label>
      </form>


    </div>
  );
}
