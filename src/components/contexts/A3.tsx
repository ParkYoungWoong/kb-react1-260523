import { useContext } from 'react'
import { ColorContext } from '@/App'

export default function A3() {
  const color = useContext(ColorContext)
  return (
    <>
      <h1 style={{ color }}>A3</h1>
    </>
  )
}
