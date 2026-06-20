import { useState, useEffect } from 'react'
import axios from 'axios'

interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    ;(async function () {
      // Fetch: const res = await fetch()
      //        const data = await res.json()
      // Axios: const { data } = await axios()
      const { data } = await axios.get(
        'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
        {
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT8_ParkYoungWoong'
          }
        }
      )
      setTodos(data)
    })()
  }, [])

  function createTodo() {
    //
  }

  return (
    <>
      <div>
        <input type="text" />
        <button>추가</button>
      </div>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}
