import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import Modal from '@/components/Modal'
import Loader from '@/components/Loader'
import { delay, loadImage } from '@/utils'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

// http://localhost:5173/movies/tt1234568?a=1&b=2&c=3
export default function MovieDetails() {
  const { movieId } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState<Movie | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isImageLoading, setIsImageLoading] = useState(true)

  useEffect(() => {
    async function fetchMovie() {
      await delay(3000)
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
      ) // 'GET'
      setMovie(await res.json())
      setIsLoading(false)
      await delay(2000)
      try {
        await loadImage(
          `https://img.omdbapi.com?apikey=7035c60c&i=${movieId}&h=1500`
        )
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message)
        }
      } finally {
        setIsImageLoading(false)
      }
    }
    fetchMovie()
  }, [])

  return (
    <Modal onClose={() => navigate('/movies')}>
      {isLoading ? (
        <div className="relative flex h-[220px] items-center justify-center">
          <Loader
            size={44}
            color="var(--color-ink-3)"
          />
        </div>
      ) : (
        movie && (
          <div className="pr-6">
            <div className="flex gap-4">
              <div className="bg-line text-ink-4 relative aspect-2/3 w-[128px] shrink-0 overflow-hidden rounded-[12px]">
                {isImageLoading ? (
                  <Loader
                    size={32}
                    color="var(--color-ink-4)"
                  />
                ) : movie.Poster && movie.Poster !== 'N/A' ? (
                  <img
                    src={`https://img.omdbapi.com?apikey=7035c60c&i=${movie.imdbID}&h=1500`}
                    alt={movie.Title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        rx="2"
                      />
                      <path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h1 className="font-display text-ink pr-6 text-[20px] leading-tight font-bold">
                  {movie.Title}
                </h1>
                <p className="text-ink-3 mt-1.5 text-[13px] tabular-nums">
                  {[movie.Year, movie.Runtime, movie.Rated]
                    .filter(v => v && v !== 'N/A')
                    .join(' · ')}
                </p>
                {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                  <span className="bg-kb-yellow-soft text-ink mt-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-bold">
                    <svg
                      className="text-kb-yellow h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.8 5.9 21l1.3-6.7-5-4.6 6.8-.8z" />
                    </svg>
                    {movie.imdbRating}
                  </span>
                )}
                {movie.Genre && movie.Genre !== 'N/A' && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {movie.Genre.split(', ').map(genre => (
                      <li
                        key={genre}
                        className="border-line-2 text-ink-2 rounded-full border px-2.5 py-1 text-[12px] font-medium">
                        {genre}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {movie.Plot && movie.Plot !== 'N/A' && (
              <p className="text-ink-2 mt-5 text-[14px] leading-relaxed">
                {movie.Plot}
              </p>
            )}

            <dl className="divide-line border-line mt-5 divide-y border-t text-[14px]">
              {[
                { label: '감독', value: movie.Director },
                { label: '각본', value: movie.Writer },
                { label: '출연', value: movie.Actors }
              ]
                .filter(row => row.value && row.value !== 'N/A')
                .map(row => (
                  <div
                    key={row.label}
                    className="flex gap-4 py-2.5">
                    <dt className="text-ink-3 w-12 shrink-0 font-bold">
                      {row.label}
                    </dt>
                    <dd className="text-ink-2 min-w-0 flex-1">{row.value}</dd>
                  </div>
                ))}
            </dl>
          </div>
        )
      )}
    </Modal>
  )
}
