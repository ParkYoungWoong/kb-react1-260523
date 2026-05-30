import { useState } from 'react'
import Button from '@/components/Button'

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Button
        loading={isLoading}
        onClick={() => {
          setIsLoading(true)
          setTimeout(() => {
            setIsLoading(false)
          }, 1000)
        }}>
        검색
      </Button>
    </>
  )
}
