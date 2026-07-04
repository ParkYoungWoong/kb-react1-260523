import { useQuery } from '@tanstack/react-query'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import Button from '@/components/Button'

interface Feature {
  to: string
  title: string
  desc: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    to: '/todos',
    title: '할 일 관리',
    desc: '오늘 처리할 일을 등록하고 관리하세요.',
    icon: <path d="M5 12l4 4L19 6" />
  },
  {
    to: '/movies',
    title: '영화 검색',
    desc: '보고 싶은 영화를 검색하고 살펴보세요.',
    icon: (
      <>
        <circle
          cx="11"
          cy="11"
          r="6"
        />
        <path d="M20 20l-3.2-3.2" />
      </>
    )
  },
  {
    to: '/about',
    title: '소개',
    desc: '이 프로젝트의 구성과 기술 스택을 확인하세요.',
    icon: (
      <>
        <circle
          cx="12"
          cy="12"
          r="8.5"
        />
        <path d="M12 11v5M12 8h.01" />
      </>
    )
  }
]

export default function Home() {
  const navigate = useNavigate()
  const { isLoading, isFetching, refetch } = useQuery({
    queryKey: ['delay'],
    queryFn: async () => {
      const { data } = await axios.get('https://api.heropy.dev/v0/delay?t=2000')
      return data
    },
    staleTime: 1000 * 20
  })

  const connecting = isLoading || isFetching

  return (
    <section className="mx-auto w-full max-w-[1000px] px-6 py-10">
      {/* 히어로 */}
      <div className="border-line bg-surface shadow-card relative overflow-hidden rounded-[20px] border p-7 sm:p-10">
        <span
          aria-hidden
          className="bg-kb-yellow-soft pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full blur-2xl"
        />
        <div className="relative">
          <span className="bg-kb-yellow-soft text-ink inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold tracking-tight">
            KB 스타뱅킹 · 데모
          </span>
          <h1 className="font-display text-ink mt-4 text-[32px] leading-[1.15] font-bold sm:text-[40px]">
            필요한 기능을
            <br />한 곳에서 관리하세요
          </h1>
          <p className="text-ink-2 mt-3 max-w-[46ch] text-[16px]">
            할 일부터 영화 검색까지, KB 스타일로 구성한 서비스 모음입니다.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button onClick={() => navigate('/todos')}>할 일 관리 시작</Button>
            <Button
              variant="secondary"
              onClick={() => navigate('/movies')}>
              영화 검색
            </Button>
          </div>
        </div>
      </div>

      {/* 기능 카드 */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {features.map(feature => (
          <Link
            key={feature.to}
            to={feature.to}
            className="group border-line bg-surface shadow-card hover:border-line-2 flex flex-col rounded-[16px] border p-5 transition hover:-translate-y-0.5">
            <span className="bg-kb-yellow-soft text-kb-black mb-4 flex h-11 w-11 items-center justify-center rounded-[12px]">
              <svg
                className="h-[22px] w-[22px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round">
                {feature.icon}
              </svg>
            </span>
            <h2 className="text-ink text-[16px] font-bold">{feature.title}</h2>
            <p className="text-ink-3 mt-1 text-[14px] leading-relaxed">
              {feature.desc}
            </p>
            <span className="text-ink-3 group-hover:text-kb-black mt-4 inline-flex items-center gap-1 text-[13px] font-bold transition-colors">
              바로가기
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* 서버 상태 */}
      <div className="border-line bg-surface shadow-card mt-6 flex items-center justify-between gap-4 rounded-[16px] border px-5 py-4">
        <div className="flex items-center gap-3">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              connecting ? 'bg-warn animate-pulse' : 'bg-positive'
            }`}
          />
          <div>
            <p className="text-ink text-[14px] font-bold">서비스 상태</p>
            <p className="text-ink-3 text-[13px]">
              {connecting ? '서버에 연결하는 중...' : '정상적으로 연결됨'}
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          loading={isFetching}
          onClick={() => refetch()}>
          새로고침
        </Button>
      </div>
    </section>
  )
}
