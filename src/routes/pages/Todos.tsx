import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoItem from '@/components/todos/TodoItem'

interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

const todoApi = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'content-type': 'application/json',
    apikey: 'KDT8_bcAWVpD8',
    username: 'KDT8_ParkYoungWoong'
  }
})

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    ;(async function () {
      // Fetch: const res = await fetch()
      //        const data = await res.json()
      // Axios: const { data } = await axios()
      const { data } = await todoApi.get('/')
      setTodos(data)
    })()
  }, [])

  async function createTodo() {
    if (!title.trim()) return
    try {
      const { data } = await todoApi.post<Todo>('/', { title })
      setTodos([data, ...todos])
      setTitle('')
    } catch (error) {
      if (error instanceof Error) {
        return console.error(error.message)
      }
      return console.log(error)
    }
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={title}
          onChange={event => {
            setTitle(event.target.value)
          }}
          onKeyDown={event => {
            if (event.nativeEvent.isComposing) return
            if (event.key === 'Enter') createTodo()
          }}
        />
        <button onClick={() => createTodo()}>추가</button>
      </div>
      <ul>
        {todos.map(todo => {
          return <li key={todo.id}>{todo.title}</li>
        })}
      </ul>
    </>
  )
}
