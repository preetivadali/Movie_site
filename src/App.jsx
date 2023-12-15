import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './components/Movies'; 
import MovieDetails from './components/MovieDetails'; // Assuming you have a MovieDetails component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);

  const YOUR_API_KEY = '98afdf7f1a4d3e333879384f55dace72'; 
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${YOUR_API_KEY}`;

  const fetchMovies = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setMovies(data.results || []);
      } else {
        throw new Error('Failed to fetch movies');
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="netflix-layout">
        <header className="netflix-header">
          {/* <h1 className="netflix-title">Movie Gallery</h1> */}
        </header>
        <Switch>
          <Route exact path="/">
            <div className="netflix-movie-list">
              {movies.map((movie) => (
                <Movies
                  key={movie.id}
                  title={movie.title}
                  posterPath={movie.poster_path}
                  overview={movie.overview}
                  // Add other movie props here
                />
              ))}
            </div>
          </Route>
          <Route path="/movies/:title">
            <MovieDetails movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
