import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useTodoStore } from '@/store/todo'
import { nanoid } from 'nanoid'

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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
    onError: () => {},
    onSettled: () => {}
  })
}
