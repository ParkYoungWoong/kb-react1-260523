import Modal from '@/components/Modal'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  const { data } = useQuery({
    queryKey: ['delay'],
    queryFn: async () => {
      const { data } = await axios.get('https://api.heropy.dev/v0/delay?t=2000')
      return data
    },
    staleTime: 1000 * 20
  })
  // if (true) {
  //   throw new Error('안녕 에러 강제 발생!!!!!!!!!!')
  // }
  return (
    <>
      <h1>About!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={() => setIsOpen(true)}>모달 열기!</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)}>나는 모달!</Modal>}
    </>
  )
}
