import type { Todo } from '@/hooks/todo'
import { useState, useRef, useEffect } from 'react'
import Button from '@/components/Button'
import { useUpdateTodo, useDeleteTodo } from '@/hooks/todo'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement>(null)
  const { mutateAsync: updateTodo, isPending: isLoadingForUpdate } =
    useUpdateTodo()
  const { mutate: deleteTodo, isPending: isLoadingForDelete } = useDeleteTodo()

  useEffect(() => {
    inputRef.current?.focus()
  }, [isEditing])

  function onEditMode() {
    setIsEditing(true)
    setTitle(todo.title)
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
    <li className="flex items-center justify-between gap-2 p-2 hover:bg-gray-200">
      {isEditing ? (
        <>
          <input
            className="flex h-[40px] w-full rounded-md border p-2"
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
          <div className="flex shrink-0 items-center gap-2">
            <Button onClick={() => offEditMode()}>취소</Button>
            <Button
              loading={isLoadingForUpdate}
              onClick={() => _updateTodo()}>
              저장
            </Button>
            <Button
              loading={isLoadingForDelete}
              onClick={() => deleteTodo(todo)}>
              삭제
            </Button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-[18px]">{todo.title}</h3>
          <Button onClick={() => onEditMode()}>수정</Button>
        </>
      )}
    </li>
  )
}
