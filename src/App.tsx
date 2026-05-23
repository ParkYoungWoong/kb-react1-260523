import { useEffect, useRef } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(function () {
    // const inputEl = document.querySelector('input')
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input
        ref={inputRef}
        type="text"
      />
    </>
  )
}
