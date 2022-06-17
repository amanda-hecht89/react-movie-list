import { useState } from 'react';
import React from 'react';

export default function useMovieForm() {

  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieColor, setMovieColor] = useState('blue');
  const [movieYear, setMovieYear] = useState('');
  return { 
    movieTitle, setMovieTitle, movieDirector, setMovieDirector,
    movieYear, setMovieYear, movieColor, setMovieColor };
}
