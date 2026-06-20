import { useEffect } from 'react'
import TodoItem from '@/components/todos/TodoItem'
import { useTodoStore } from '@/store/todo'

export default function Todos() {
  // const num = useXXXStore(() => 123)
  const todos = useTodoStore(s => s.todos)
  const title = useTodoStore(s => s.title)
  const setTitle = useTodoStore(s => s.setTitle)
  const fetchTodos = useTodoStore(s => s.fetchTodos)
  const createTodo = useTodoStore(s => s.createTodo)

  useEffect(() => {
    fetchTodos()
  }, [])

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
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}
