import Button from '@/components/Button'
import { useMovieStore } from '@/store/movie'
import { useState } from 'react'

export default function MovieSearch() {
  const [inputText, setInputText] = useState('')
  const setSearchText = useMovieStore(state => state.setSearchText)

  function fetchMovies() {
    setSearchText(inputText)
  }

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') fetchMovies()
        }}
      />
      <Button onClick={() => fetchMovies()}>검색</Button>
    </>
  )
}
