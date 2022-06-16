import './App.css';
import { useState } from 'react';
import MovieForm from './Movies/MovieForm';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [showMovies, setShowMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieColor, setMovieColor] = useState('');
  const [movieYear, setMovieYear] = useState('');

  function submitMovie(e) {
    e.preventDefault();
    const flick = {
      name: movieTitle,
      year: movieYear,
      director: movieDirector,
      color: movieColor,
    };
    const updatedMovies = [...allMovies, flick];
    setAllMovies(updatedMovies);
    setMovieTitle('');
    setMovieYear('');
    setMovieDirector('');
    setMovieColor('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='add-movie'>
          <Movie />
        </div>
        <div className='movie-filter'>
          <MovieForm />
        </div>
        <div className='movie-list'>
          <MovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
