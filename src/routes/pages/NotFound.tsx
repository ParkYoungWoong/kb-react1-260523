import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="bg-bg flex min-h-[100dvh] items-center justify-center px-6 py-16">
      <div className="border-line bg-surface shadow-card w-full max-w-[440px] rounded-[24px] border p-10 text-center">
        <p className="font-display text-ink text-[64px] leading-none font-bold tracking-tight tabular-nums">
          4<span className="text-kb-yellow">0</span>4
        </p>
        <h1 className="text-ink mt-6 text-[20px] font-bold">
          페이지를 찾을 수 없어요
        </h1>
        <p className="text-ink-3 mt-2 text-[15px] leading-relaxed">
          요청하신 주소가 사라졌거나 잘못 입력되었어요.
          <br />
          주소를 다시 확인해 주세요.
        </p>
        <Link
          to="/"
          className="bg-kb-yellow text-kb-black hover:bg-kb-yellow-strong focus-visible:ring-kb-yellow/60 mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-[12px] px-6 text-[15px] font-bold transition outline-none focus-visible:ring-2 active:scale-[0.98]">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  )
}
