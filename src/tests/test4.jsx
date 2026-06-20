import { useRef, useEffect } from 'react'

export function Child() {
  const divRef = useRef < HTMLInputElement > null
  useEffect(() => {
    divRef.current.focus()
  }, [])
  return (
    <div
      ref={divRef}
      className="box"
      onClick={handler}>
      Hello
    </div>
  )
}
export function App() {
  return <Child />
}

export function Child() {
  const divEl = document.createElement('div')
  divEl.classList.add('box')
  divEl.addEventListener('click', handler)
  setTimeout(() => {
    divEl.focus()
  })
  return divEl
}
export function App() {
  document.getElementById('root').append(Child())
}
