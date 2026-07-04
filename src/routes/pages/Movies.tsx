import MovieSearch from '@/components/movies/MovieSearch'
import MovieList from '@/components/movies/MovieList'
import { Outlet } from 'react-router'

export default function Movies() {
  return (
    <section className="mx-auto w-full max-w-[1000px] px-6 py-10">
      <header className="mb-8">
        <h1 className="font-display text-ink text-[28px] leading-tight font-bold">
          영화 검색
        </h1>
        <p className="text-ink-2 mt-1.5 text-[15px]">
          보고 싶은 영화를 검색하고 자세히 살펴보세요.
        </p>
      </header>

      <MovieSearch />
      <MovieList />
      <Outlet />
    </section>
  )
}
