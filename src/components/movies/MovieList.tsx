import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { useMovieStore } from '@/store/movie'
import type { Movie } from '@/store/movie'

// http://localhost:5173/movies/tt10872600?searchText=spider
export default function MovieList() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const { data: movies } = useQuery<Movie[]>({
    queryKey: ['movies', searchText],
    queryFn: fetchMovies,
    staleTime: 1000 * 60 * 60 * 2, // ms
    enabled: Boolean(searchText)
  })

  return (
    <ul>
      {movies?.map(movie => {
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
