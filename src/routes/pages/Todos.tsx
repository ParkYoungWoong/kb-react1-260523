import TodoItem from '@/components/todos/TodoItem'
import Button from '@/components/Button'
import { useFetchTodos, useCreateTodo, useTodoStore } from '@/hooks/todo'

export default function Todos() {
  const title = useTodoStore(s => s.title)
  const setTitle = useTodoStore(s => s.setTitle)
  const { data: todos, isLoading, isFetching } = useFetchTodos()
  const { mutateAsync: createTodo, isPending } = useCreateTodo()

  async function _createTodo() {
    await createTodo()
    setTitle('')
  }

  const count = todos?.length ?? 0

  return (
    <section className="mx-auto w-full max-w-[1000px] px-6 py-10">
      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-ink text-[28px] leading-tight font-bold">
            할 일 관리
          </h1>
          <p className="text-ink-2 mt-1.5 text-[15px]">
            오늘 처리할 일을 등록하고 관리하세요.
          </p>
        </div>
        {!isLoading && (
          <span className="bg-kb-yellow-soft text-ink shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-bold tabular-nums">
            총 {count}개
          </span>
        )}
      </header>

      {/* 입력(히어로) */}
      <div className="border-line bg-surface shadow-card rounded-[16px] border p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={title}
            placeholder="새로운 할 일을 입력하세요"
            onChange={event => setTitle(event.target.value)}
            onKeyDown={event => {
              if (event.nativeEvent.isComposing) return
              if (event.key === 'Enter') _createTodo()
            }}
            className="border-line-2 bg-surface text-ink placeholder:text-ink-4 focus:border-kb-yellow focus:ring-kb-yellow/40 h-14 w-full min-w-0 flex-1 rounded-[12px] border px-5 text-[17px] transition outline-none focus:ring-2"
          />
          <Button
            className="h-14 shrink-0 px-7 text-[16px]"
            loading={isPending}
            onClick={() => _createTodo()}>
            추가
          </Button>
        </div>
      </div>

      {/* 목록 */}
      <div className="border-line bg-surface shadow-card relative mt-6 overflow-hidden rounded-[16px] border">
        {isFetching && !isLoading && (
          <>
            <style>{`
              @keyframes todoBar { 0% { transform: translateX(-100%) } 100% { transform: translateX(300%) } }
              .todo-bar-fill { animation: todoBar 1.1s ease-in-out infinite }
              @media (prefers-reduced-motion: reduce) { .todo-bar-fill { animation: none; width: 100% } }
            `}</style>
            <div
              aria-hidden
              className="bg-kb-yellow-soft absolute inset-x-0 top-0 h-[3px] overflow-hidden">
              <div className="todo-bar-fill bg-kb-yellow h-full w-1/3" />
            </div>
          </>
        )}

        {isLoading ? (
          <ul className="divide-line divide-y">
            {Array.from({ length: 4 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-3 px-5 py-4">
                <div className="bg-line h-4 w-1/2 animate-pulse rounded" />
                <div className="bg-line h-8 w-14 animate-pulse rounded-[10px]" />
              </li>
            ))}
          </ul>
        ) : count === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="bg-kb-yellow-soft mb-4 flex h-14 w-14 items-center justify-center rounded-full">
              <svg
                className="text-kb-black h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <h2 className="text-ink text-[17px] font-bold">
              등록된 할 일이 없어요
            </h2>
            <p className="text-ink-3 mt-1.5 text-[14px]">
              위 입력창에서 첫 할 일을 추가해 보세요.
            </p>
          </div>
        ) : (
          <ul className="divide-line divide-y">
            {todos?.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
