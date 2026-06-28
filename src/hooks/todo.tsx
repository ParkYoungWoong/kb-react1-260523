import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useTodoStore } from '@/store/todo'
import { nanoid } from 'nanoid'
// import { delay } from '@/utils'
import { create } from 'zustand'
import { combine } from 'zustand/middleware'

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

export const useTodoStore = create(combine())

export function useFetchTodos() {
  return useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: async () => {
      const { data } = await todoApi.get<Todo[]>('/')
      return data
    }
  })
}

export function useCreateTodo() {
  const title = useTodoStore(state => state.title)
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async () => {
      if (!title.trim()) return
      const { data } = await todoApi.post<Todo>('/', { title })
      return data
      // await delay(3000)
      // throw new Error('테스트 에러!')
    },
    onMutate: () => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos'])
      if (previousTodos) {
        queryClient.setQueryData(
          ['todos'],
          [{ id: nanoid(10), title }, ...previousTodos]
        )
      }
      return previousTodos
    },
    // onSuccess: (data, abc, previousTodos) => {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    // onError: (error, abc, previousTodos) => {},
    onError: (_error, _abc, previousTodos) => {
      console.log(_error, _abc)
      if (previousTodos) {
        queryClient.setQueryData(['todos'], previousTodos)
        alert('예상치 못한 에러가 발생했어요. 관리자에게 문의하세요~')
      }
    },
    onSettled: () => {}
  })
}

export function useUpdateTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id, title, done }: Todo) => {
      await todoApi.put(`/${id}`, {
        title,
        done
      })
    },
    onMutate: todo => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos'])
      if (previousTodos) {
        queryClient.setQueryData(
          ['todos'],
          previousTodos.map(t => {
            // if (t.id === todo.id) return todo
            // return t
            return t.id === todo.id ? todo : t
          })
        )
      }
      return previousTodos
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: (_error, _todo, previousTodos) => {
      console.log(_error, _todo)
      if (previousTodos) {
        queryClient.setQueryData(['todos'], previousTodos)
        alert('예상치 못한 에러가 발생했어요. 관리자에게 문의하세요~')
      }
    },
    onSettled: () => {}
  })
}

export function useDeleteTodo() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async ({ id }: Todo) => {
      await todoApi.delete(`/${id}`)
    },
    onMutate: ({ id }) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos'])
      if (previousTodos) {
        queryClient.setQueryData(
          ['todos'],
          previousTodos.filter(t => {
            return t.id !== id
          })
        )
      }
      return previousTodos
      // !=, !==
      // ==, ===
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: (_error, _todo, previousTodos) => {
      console.log(_error, _todo)
      if (previousTodos) {
        queryClient.setQueryData(['todos'], previousTodos)
        alert('예상치 못한 에러가 발생했어요. 관리자에게 문의하세요~')
      }
    },
    onSettled: () => {}
  })
}
