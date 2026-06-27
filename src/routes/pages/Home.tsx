import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Home() {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['delay'],
    queryFn: async () => {
      const { data } = await axios.get('https://api.heropy.dev/v0/delay?t=2000')
      return data
    },
    staleTime: 1000 * 20
  })

  return (
    <>
      <h1 onClick={() => refetch()}>Home!</h1>
      {isLoading ? '로딩 중..' : ''}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
