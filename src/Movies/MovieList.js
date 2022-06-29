import React from 'react';
import Movie from './Movie';

export default function MovieList({ allMovies, deleteMovie }) {
  return (<div className='moviesHere'>
    {
      allMovies.map((movie, i) => <Movie
        deleteMovie={deleteMovie}
        key={movie.title + i} {...movie} />
      )}
  </div>);
}
