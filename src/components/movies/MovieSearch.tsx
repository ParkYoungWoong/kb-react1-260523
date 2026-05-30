import Button from '@/components/Button'
import { useMovieStore } from '@/store/movie'

export default function MovieSearch() {
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') fetchMovies()
        }}
      />
      <Button onClick={() => fetchMovies()}>검색</Button>
    </>
  )
}
