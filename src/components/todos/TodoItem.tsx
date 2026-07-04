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
    <li className="hover:bg-bg flex items-center gap-3 px-5 py-3 transition-colors">
      {isEditing ? (
        <>
          <input
            className="border-line-2 bg-surface text-ink focus:border-kb-yellow focus:ring-kb-yellow/40 h-11 w-full min-w-0 flex-1 rounded-[12px] border px-4 text-[15px] transition outline-none focus:ring-2"
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => offEditMode()}>
              취소
            </Button>
            <Button
              variant="primary"
              size="sm"
              loading={isLoadingForUpdate}
              onClick={() => _updateTodo()}>
              저장
            </Button>
            <Button
              variant="danger"
              size="sm"
              loading={isLoadingForDelete}
              onClick={() => deleteTodo(todo)}>
              삭제
            </Button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-ink min-w-0 flex-1 truncate text-[16px] font-medium">
            {todo.title}
          </h3>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => onEditMode()}>
            수정
          </Button>
        </>
      )}
    </li>
  )
}
