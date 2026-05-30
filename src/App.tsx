import MovieSearch from '@/components/movies/MovieSearch'
import MovieList from '@/components/movies/MovieList'
import { useCountStore } from '@/store/count'

export default function App() {
  const count = useCountStore(state => state.count)
  const increase = useCountStore(state => state.increase)
  return (
    <>
      <h1 onClick={() => increase()}>{count}</h1>
      <MovieSearch />
      <MovieList />
    </>
  )
}
