import './App.css';
import { useEffect, useState } from 'react';
import MovieForm from './Movies/MovieForm';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { useMovieForm } from './UseMovieForm';

function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [showMovies, setShowMovies] = useState([]);
  const [updatedMovies, setUpdatedMovies] = useState([]);


  const { movieTitle, setMovieTitle, movieDirector, setMovieDirector, 
    movieColor, setMovieColor, movieYear, setMovieYear } = useMovieForm();

  useEffect(() => {
    const updatedMovies = flick
    filter(flick => movieColor.name.includes(allMovies));
    setUpdatedMovies(updatedMovies);
  }, [allMovies, flick]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='add-movie'>
          <Movie flick={{
            name: movieTitle,
            year: movieYear,
            director: movieDirector,
            color: movieColor,
          }}/>
        </div>
        <div className='movie-filter'>
          <MovieForm 
            submitMovie={submitMovie}
            movieTitle={movieTitle}
            setMovieTitle={setMovieTitle}
            movieYear={movieYear}
            setMovieYear={setMovieYear}
            movieDirector={movieDirector}
            setMovieDirector={setMovieDirector}
            movieColor={movieColor}
            setMovieColor={setMovieColor}
          />
        </div>
        <div className='movie-list'>
          <MovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
