import { useState } from 'react'

export default function App() {
  const [fruits, setFruits] = useState(['apple', 'banana', 'cherry'])
  const [text, setText] = useState('')

  function addFruit() {
    setFruits([...fruits, text])
    setText('')
  }

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={function (event) {
          setText(event.target.value)
        }}
        onKeyDown={function (event) {
          if (event.nativeEvent.isComposing) return
          if (event.key === 'Enter') addFruit()
        }}
      />
      <button
        onClick={function () {
          addFruit()
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
