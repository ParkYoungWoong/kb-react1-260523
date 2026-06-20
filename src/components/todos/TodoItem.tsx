import type { Todo } from '@/store/todo'
import { useState, useRef, useEffect } from 'react'
import { useTodoStore } from '@/store/todo'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)
  const updateTodo = useTodoStore(s => s.updateTodo)
  const deleteTodo = useTodoStore(s => s.deleteTodo)

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  function onEditMode() {
    setIsEditing(true)
  }
  function offEditMode() {
    setIsEditing(false)
    setTitle(todo.title)
  }
  async function _updateTodo() {
    if (!title.trim()) return
    if (title === todo.title) return offEditMode()
    await updateTodo({
      ...todo,
      title: title
    })
    offEditMode()
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            ref={inputRef}
            type="text"
            value={title}
            onChange={event => setTitle(event.target.value)}
            onKeyDown={event => {
              if (event.nativeEvent.isComposing) return
              if (event.key === 'Escape') offEditMode()
              if (event.key === 'Enter') _updateTodo()
            }}
          />
          <button onClick={() => offEditMode()}>취소</button>
          <button onClick={() => _updateTodo()}>저장</button>
          <button onClick={() => deleteTodo(todo)}>삭제</button>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <button onClick={() => onEditMode()}>수정</button>
        </>
      )}
    </li>
  )
}
