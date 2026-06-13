import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Modal from '@/components/Modal'
import Loader from '@/components/Loader'
import { delay } from '@/utils'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

// http://localhost:5173/movies/tt1234568?a=1&b=2&c=3
export default function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchMovie() {
      await delay(4000)
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      ) // 'GET'
      setMovie(await res.json())
      setIsLoading(false)
    }
    fetchMovie()
  }, [])

  return (
    <Modal onClose={() => navigate('/movies')}>
      {isLoading ? (
        <Loader
          size={100}
          className="relative"
        />
      ) : (
        movie && (
          <>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
            <p>{movie.Actors}</p>
            <p>{movie.Genre}</p>
            <p>{movie.Director}</p>
            <p>{movie.Writer}</p>
            <img
              src={`https://img.omdbapi.com?apikey=7035c60c&i=${movie.imdbID}&h=1500`}
              alt={movie.Title}
            />
          </>
        )
      )}
    </Modal>
  )
}
