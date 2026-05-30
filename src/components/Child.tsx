import { useState } from 'react'

interface Props {
  onColor: (color: string) => void
}

export default function Child({ onColor }: Props) {
  const [color] = useState('blue')
  return (
    <button
      onClick={() => {
        onColor(color)
      }}>
      클릭!
    </button>
  )
}
