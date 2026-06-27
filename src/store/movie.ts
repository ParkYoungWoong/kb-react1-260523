import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface ResponseValue {
  Search?: Movie[]
  totalResults?: `${number}`
  Error?: string
  Response: 'True' | 'False'
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Poster: string
  Type: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: ''
    },
    (set, get) => ({
      setSearchText(searchText: string) {
        set({ searchText })
      },
      async fetchMovies(pageParam: number) {
        const { searchText } = get()
        if (searchText.trim().length < 3) return null
        const res = await fetch(
          `https://omdbapi.com/?apikey=7035c60c&s=${searchText}&page=${pageParam}`
        )
        const data: ResponseValue = await res.json()
        // set({
        //   movies: data.Search || []
        // })
        return data
      }
    })
  )
)
