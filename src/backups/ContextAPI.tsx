import { useState, createContext } from 'react'
import Button from '@/components/Button'
import Parent from '@/components/Parent'

// eslint-disable-next-line
export const ColorContext = createContext<string>('')

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [color] = useState('orange')
  return (
    <ColorContext.Provider value={color}>
      <Parent />
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
    </ColorContext.Provider>
  )
}
