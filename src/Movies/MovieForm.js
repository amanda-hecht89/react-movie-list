import React from 'react';

export default function MovieForm({ movieTitle, setMovieTitle, 
  movieDirector, setMovieDirector, movieColor, 
  setMovieColor, movieYear, setMovieYear, addMovie }) {

  function submitMovie(e) {
    e.preventDefault();
    const flick = {
      name: movieTitle,
      year: movieYear,
      director: movieDirector,
      color: movieColor,
    };
    addMovie(flick);
    setMovieTitle('');
    setMovieDirector('');
    setMovieYear('');
    setMovieColor('');
  }

  return ( 
    <div className='movieFormContainer'>
      <form className='movieForm' onSubmit={submitMovie}>
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
          <select className="dropDown" value={movieColor} onChange={e => setMovieColor(e.target.value)}>
            <option value="blank">Pick a Color!</option>
            <option value="pink">Romance - Pink</option>
            <option value="blue">Action - Blue</option>
            <option value="green">Comedy - Green</option>
            <option value="red">Horror - Red</option>
            <option value="orange">Drama - Orange</option>
          </select>
        </label>
        <button className="button">Add Movie To<br/> WatchList</button>
      </form>
    </div>
  );
}
