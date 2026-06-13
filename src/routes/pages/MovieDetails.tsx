import { useParams } from 'react-router'

// 10:14

// http://localhost:5173/movies/tt1234568?a=1&b=2&c=3
export default function MovieDetails() {
  const { movieId } = useParams()

  async function fetchMovie() {
    const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieId}`) // 'GET'
    const movie = await res.json()
  }

  return <h1>{movieId}</h1>
}
