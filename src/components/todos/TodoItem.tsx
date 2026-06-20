import type { Todo } from '@/store/todo'
import { useState, useRef, useEffect } from 'react'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)

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
  // async function updateTodo() {
  //   //
  // }

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
              if (event.key === 'Escape') offEditMode()
            }}
          />
          <button onClick={() => offEditMode()}>취소</button>
          <button>저장</button>
          <button>삭제</button>
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
