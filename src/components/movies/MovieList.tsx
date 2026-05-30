import { useMovieStore } from '@/store/movie'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  return (
    <ul>
      {movies.map(movie => {
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
  )
}
