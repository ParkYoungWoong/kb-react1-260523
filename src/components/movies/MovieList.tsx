import { Link } from 'react-router'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useMovieStore } from '@/store/movie'
import type { ResponseValue } from '@/store/movie'
import { Fragment } from 'react'
import Button from '@/components/Button'
import { useOnInView } from 'react-intersection-observer'

// http://localhost:5173/movies/tt10872600?searchText=spider
export default function MovieList() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage, isFetching } =
    useInfiniteQuery<ResponseValue | null>({
      queryKey: ['movies', searchText],
      queryFn: ({ pageParam }) => {
        return fetchMovies(pageParam as number)
      },
      staleTime: 1000 * 60 * 60 * 2, // ms
      enabled: Boolean(searchText),
      initialPageParam: 1,
      getNextPageParam: (lastPage, pages) => {
        // '812' => 82
        if (lastPage) {
          const maxPage = Math.ceil(Number(lastPage.totalResults) / 10)
          if (pages.length < maxPage) {
            // [{1}, {2}, {3}]
            return pages.length + 1
          }
        }
        return null
      }
    })
  const ref = useOnInView(inView => {
    if (inView) fetchNextPage()
  })

  return (
    <>
      <ul className="flex flex-wrap gap-3">
        {data?.pages.map((page, index) => {
          return (
            <Fragment key={index}>
              {page?.Search?.map(movie => {
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
            </Fragment>
          )
        })}
      </ul>
      {hasNextPage && !isFetching && (
        <>
          <div className={hasNextPage && !isFetching ? 'block' : 'hidden'}>
            <Button
              ref={ref}
              loading={isFetchingNextPage}
              onClick={() => fetchNextPage()}>
              더보기!
            </Button>
          </div>
        </>
      )}
    </>
  )
}
