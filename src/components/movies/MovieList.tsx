import { useMovieStore } from '@/store/movie'
import { Link } from 'react-router'

// http://localhost:5173/movies/tt10872600?searchText=spider
export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.imdbID}>
            <Link to={`/movies/${movie.imdbID}`}>
              <div>{movie.Title}</div>
              <img
                src={movie.Poster}
                alt={movie.Title}
              />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
