import './App.css';
import { useEffect, useState } from 'react';
import MovieForm from './Movies/MovieForm';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import useMovieForm from './UseMovieForm';
import React from 'react';

function App() {
//current movies movies//
  const [showMovies, setShowMovies] = useState('');
  //all movies//
  const [allMovies, setAllMovies] = useState([]);
  //filtered movies//
  const [filteredMovies, setFilteredMovies] = useState([]);


  const { movieTitle, setMovieTitle, movieDirector, setMovieDirector, 
    movieColor, setMovieColor, movieYear, setMovieYear } = useMovieForm();

  useEffect(() => {
    const filteredMovies = allMovies
      .filter(movie => movie.name.includes(showMovies));
    setFilteredMovies(filteredMovies);
  }, [showMovies, allMovies]);

  function addMovie(newMovie) {
    const updatedMovies = [...allMovies, newMovie];
    setAllMovies(updatedMovies);
  }

  function deleteMovie(name) {
    const index = allMovies.findIndex(movie => movie.name === name);
    allMovies.splice(index, 1);
    setShowMovies('');
    setAllMovies([...allMovies]);
  }

  return (
    <div className="App">
      <header className="App-header" >
        <div className='add-movie'>
          <Movie 
            name={ movieTitle }
            year={ movieYear }
            director={ movieDirector }
            color={ movieColor }
          />
        </div>
        <div className='movie-filter'>
          <MovieForm 
            movieTitle={movieTitle}
            setMovieTitle={setMovieTitle}
            movieYear={movieYear}
            setMovieYear={setMovieYear}
            movieDirector={movieDirector}
            setMovieDirector={setMovieDirector}
            movieColor={movieColor}
            setMovieColor={setMovieColor}
            addMovie={addMovie}
          />
        </div>
        <div className='filter'>
          <h1>Filter Movie</h1>
          <input value={showMovies} onChange={(e) => setShowMovies(e.target.value)} />


        </div>
        <div className='movie-list'>
          <MovieList allMovies={
            filteredMovies.length 
              ? filteredMovies 
              : allMovies
          } 
          deleteMovie={deleteMovie}/>
        </div>
      </header>
    </div>
  );
}

export default App;
