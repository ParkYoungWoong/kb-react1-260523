import { useState, useEffect } from 'react'

export interface ResponseValue {
  Search: Movie[]
  totalResults: string
  Response: string
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Poster: string
  Type: string
}

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  // useEffect(실행할함수, 의존성배열)
  useEffect(function () {
    async function fetchMovies() {
      const res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=spider')
      const data = await res.json()
      setMovies(data.Search)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <ul>
        {movies.map(function (movie) {
          return (
            <li key={movie.imdbID}>
              <div>{movie.Title}</div>
              <img
                src={movie.Poster}
                alt={movie.Title}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
