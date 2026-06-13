import { useState, useEffect } from 'react'

console.log('123' === '123')

export default function App() {
  const [count, setCount] = useState<number>(0)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {}, [])
  return (
    <>
      <h2>{count + 2}</h2>
      <button
        onClick={function () {
          const newCount = count + 1
          setCount(newCount)
          console.log(newCount)
        }}>
        {JSON.stringify(false)}
      </button>
    </>
  )
}
