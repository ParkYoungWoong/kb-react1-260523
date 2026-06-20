import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export interface Todo {
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

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todo[],
      title: ''
    }, // 상태 객체
    (set, get) => {
      function setTitle(title: string) {
        set({ title })
      }
      async function fetchTodos() {
        const { data } = await todoApi.get<Todo[]>('/')
        // setTodos(data)
        set({
          todos: data
        })
      }
      async function createTodo() {
        const { title, todos } = get()
        if (!title.trim()) return
        try {
          const { data } = await todoApi.post<Todo>('/', { title })
          set({
            todos: [data, ...todos],
            title: ''
          })
        } catch (error) {
          if (error instanceof Error) {
            return console.error(error.message)
          }
          return console.log(error)
        }
      }
      async function updateTodo({ id, title, done }: Todo) {
        const { data } = await todoApi.put(`/${id}`, {
          title,
          done
        })
        fetchTodos()
      }
      async function deleteTodo() {}

      return {
        setTitle,
        fetchTodos,
        createTodo,
        updateTodo,
        deleteTodo
      }
    } // 액션 객체 반환 함수
  )
)
