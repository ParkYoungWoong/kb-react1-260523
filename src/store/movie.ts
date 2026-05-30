import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      movies: [] as Movie[]
    },
    set => ({
      setSearchText(searchText: string) {
        set({ searchText })
      },
      async fetchMovies() {
        const res = await fetch('https://omdbapi.com/?apikey=7035c60c&s=spider')
        const data = await res.json()
        // setMovies(data.Search)
        set({
          movies: data.Search
        })
      }
    })
  )
)
