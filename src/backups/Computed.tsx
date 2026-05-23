import { useState, useEffect } from 'react'

function getDouble(count: number) {
  return count * 2
}

export default function App() {
  const [count, setCount] = useState(0)
  const double = getDouble(count)

  // useEffect(실행할함수, 의존성배열)
  useEffect(
    function () {
      console.log('double 데이터가 변경되었네요~', double)
    },
    [double]
  )

  return (
    <>
      <h1>count: {count}</h1>
      <h2>double: {double}</h2>
      <button
        onClick={() => {
          setCount(count + 1)
        }}>
        증가
      </button>
    </>
  )
}
