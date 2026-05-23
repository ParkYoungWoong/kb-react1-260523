import { useState } from 'react'

// 리스트 렌더링 = 배열 데이터 출력

export default function App() {
  const [fruits, setFruits] = useState(['apple', 'banana', 'cherry'])
  const [text, setText] = useState('')

  return (
    <>
      <input
        type="text"
        defaultValue={text}
      />
      <button
        onClick={function () {
          setFruits([...fruits, 'orange'])
        }}>
        추가!
      </button>
      <ul>
        {fruits.map(function (fruit) {
          return <li key={fruit}>{fruit}</li>
        })}
      </ul>
    </>
  )
}

// 3시 14분까지 쉬는 시간입니다.
