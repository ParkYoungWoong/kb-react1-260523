import Modal from '@/components/Modal'
import Button from '@/components/Button'
import { useState } from 'react'

const stack = [
  'React 19',
  'TypeScript',
  'Vite',
  'Tailwind CSS v4',
  'TanStack Query',
  'Zustand',
  'React Router',
  'Axios'
]

export default function About() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="mx-auto w-full max-w-[1000px] px-6 py-10">
      <header className="mb-8">
        <h1 className="font-display text-ink text-[28px] leading-tight font-bold">
          소개
        </h1>
        <p className="text-ink-2 mt-1.5 text-[15px]">
          이 프로젝트의 구성과 사용 기술을 확인하세요.
        </p>
      </header>

      {/* 프로젝트 소개 */}
      <div className="border-line bg-surface shadow-card rounded-[16px] border p-6 sm:p-7">
        <h2 className="text-ink text-[18px] font-bold">KB 스타뱅킹 데모</h2>
        <p className="text-ink-2 mt-2 text-[15px] leading-relaxed">
          React 학습을 위해 만든 데모 애플리케이션입니다. 할 일 관리, 영화 검색,
          로그인 흐름을 KB 스타일의 일관된 디자인으로 구성했습니다.
        </p>

        <div className="bg-line my-6 h-px" />

        <h3 className="text-ink-3 text-[13px] font-bold tracking-tight">
          사용 기술
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map(tech => (
            <li
              key={tech}
              className="border-line-2 bg-bg text-ink-2 rounded-full border px-3 py-1.5 text-[13px] font-medium">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* 안내 모달 */}
      <div className="border-line bg-surface shadow-card mt-6 flex flex-col items-start gap-4 rounded-[16px] border p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-ink text-[15px] font-bold">더 알아보기</p>
          <p className="text-ink-3 mt-1 text-[14px]">
            프로젝트에 대한 간단한 안내를 확인해 보세요.
          </p>
        </div>
        <Button
          variant="secondary"
          className="shrink-0"
          onClick={() => setIsOpen(true)}>
          안내 보기
        </Button>
      </div>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="pr-8">
            <span className="bg-kb-yellow-soft text-kb-black mb-4 flex h-12 w-12 items-center justify-center rounded-[14px]">
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                />
                <path d="M12 11v5M12 8h.01" />
              </svg>
            </span>
            <h2 className="text-ink text-[19px] font-bold">
              학습용 데모입니다
            </h2>
            <p className="text-ink-2 mt-2 text-[15px] leading-relaxed">
              이 화면은 실제 KB 서비스가 아니라, React 기능을 연습하기 위한 예제
              프로젝트입니다. 자유롭게 둘러보세요.
            </p>
            <div className="mt-6 flex justify-end">
              <Button
                size="sm"
                onClick={() => setIsOpen(false)}>
                확인
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  )
}
