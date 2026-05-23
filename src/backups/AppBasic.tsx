import { useState } from 'react'

document.querySelector('button')?.addEventListener('click', function (event) {
  event.preventDefault()
  event.stopPropagation()
})

export default function App() {
  // let abc = 123
  const [abc, setAbc] = useState(123)
  const isActive = true
  const [fontSize, setFontSize] = useState(16)

  return (
    <>
      <div
        className={isActive ? 'active' : ''}
        style={{ fontSize: `${fontSize}px` }}
        onClick={() => setFontSize(fontSize + 4)}>
        {abc}
      </div>
      <button
        onClick={function (event) {
          event.preventDefault()
          event.stopPropagation()
          setAbc(abc + 1)
          console.log(abc)
        }}>
        클릭!
      </button>
    </>
  )
}
