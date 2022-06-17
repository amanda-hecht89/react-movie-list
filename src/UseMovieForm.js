import { useState } from 'react';

export default function useMovieForm() {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieColor, setMovieColor] = useState('blank');
  const [movieYear, setMovieYear] = useState('');
  return { 
    movieTitle, setMovieTitle, movieDirector, setMovieDirector,
    movieYear, setMovieYear, movieColor, setMovieColor };
}
