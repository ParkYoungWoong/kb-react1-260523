import MovieSearch from '@/components/movies/MovieSearch'
import MovieList from '@/components/movies/MovieList'
import { Outlet } from 'react-router'

export default function Movies() {
  return (
    <>
      <MovieSearch />
      <MovieList />
      <Outlet />
    </>
  )
}
