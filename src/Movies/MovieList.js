import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies, deleteMovies }) {
  return (<div className='moviesHere'>
    {
      allMovies.map((movie, i) => <Movie
        deleteMovies={deleteMovies}
        key={movie.title + i} {...movie} />
      )}
  </div>);
}
