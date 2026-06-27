import TodoItem from '@/components/todos/TodoItem'
import { useTodoStore } from '@/store/todo'
import Button from '@/components/Button'
import Loader from '@/components/Loader'
import { useFetchTodos } from '@/hooks/todo'

export default function Todos() {
  const title = useTodoStore(s => s.title)
  const setTitle = useTodoStore(s => s.setTitle)
  const createTodo = useTodoStore(s => s.createTodo)
  const isLoadingForCreate = useTodoStore(s => s.isLoadingForCreate)
  const { data: todos, isLoading } = useFetchTodos()

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
        <Button
          loading={isLoadingForCreate}
          onClick={() => createTodo()}>
          추가
        </Button>
      </div>
      <ul>
        {todos?.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
      {isLoading && (
        <Loader
          size={200}
          className="fixed"
        />
      )}
    </>
  )
}
