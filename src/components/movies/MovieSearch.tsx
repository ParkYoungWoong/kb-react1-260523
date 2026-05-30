import Button from '@/components/Button'
import { useMovieStore } from '@/store/movie'

export default function MovieSearch() {
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <Button>검색</Button>
    </>
  )
}
