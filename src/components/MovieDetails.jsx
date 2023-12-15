import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import './MovieDetails.css'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieDetails = ({ movies }) => {
  const { title } = useParams()
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const foundMovie = movies.find(movie => movie.title === title)

    if (foundMovie) {
      setSelectedMovie(foundMovie)
      setLoading(false)
    } else {
      setError('Movie not found')
      setLoading(false)
    }
  }, [movies, title])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!selectedMovie) {
    return null //
  }

  const { title: movieTitle, poster_path: posterPath, overview } = selectedMovie

  return (
    <div className='movie-details'>
        <Link to='/' className='back-button'>
          Back
        </Link>
      <div
        className='movie-details-poster'
        style={{ backgroundImage: `url(${API_IMG + posterPath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.98, }}
      >
        <div className='details-content'>
          <h2>{movieTitle}</h2>
          <p>{overview}</p>
        </div>
      </div>

      {/* Mini movie poster card */}
      <div className='mini-movie-card'>
        <img src={API_IMG + posterPath} alt={movieTitle} />
      </div>
    </div>
  )
}

export default MovieDetails
