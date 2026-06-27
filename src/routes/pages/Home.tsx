import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Home() {
  const { data } = useQuery({
    queryKey: ['delay'],
    queryFn: async () => {
      const { data } = await axios.get('https://api.heropy.dev/v0/delay?t=2000')
      return data
    },
    staleTime: 1000 * 20,
    enabled: false
  })

  return (
    <>
      <h1>Home!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
