import { Link } from 'react-router'

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-[#f4f1e9] bg-[linear-gradient(#1111110f_1px,transparent_1px),linear-gradient(90deg,#1111110f_1px,transparent_1px)] bg-[size:36px_36px] text-[#111] selection:bg-[#ffbc00]">
      {/* 상단 상태바 */}
      <header className="flex items-center justify-between border-b-[3px] border-[#111] bg-[#ffbc00] px-4 py-2 font-mono text-[10px] font-bold tracking-[0.25em] uppercase sm:px-6 sm:text-xs">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 border-2 border-[#111] bg-[#f04452]" />
          <span className="h-3 w-3 border-2 border-[#111] bg-white" />
          <span className="h-3 w-3 border-2 border-[#111] bg-[#111]" />
        </span>
        <span className="hidden sm:inline">error.log // 404</span>
        <span className="flex items-center gap-2">
          rec
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#f04452]" />
        </span>
      </header>

      {/* 본문 */}
      <section className="relative flex flex-1 flex-col items-center justify-center px-6 py-16">
        {/* 회전 스티커 */}
        <span className="absolute top-[12%] left-[6%] hidden rotate-[-9deg] border-[3px] border-[#111] bg-white px-3 py-1 font-mono text-xs font-bold tracking-widest uppercase shadow-[4px_4px_0_0_#111] sm:block">
          lost?
        </span>
        <span className="absolute top-[18%] right-[7%] hidden rotate-[7deg] border-[3px] border-[#111] bg-[#ffbc00] px-3 py-1 font-mono text-xs font-bold tracking-widest uppercase shadow-[4px_4px_0_0_#111] sm:block">
          dead end
        </span>

        {/* 404 */}
        <h1 className="flex items-center justify-center gap-2 font-sans select-none sm:gap-5">
          <span className="text-[clamp(88px,26vw,248px)] leading-none font-black tracking-tighter">
            4
          </span>
          <span className="relative grid aspect-square w-[clamp(84px,22vw,210px)] place-items-center border-[5px] border-[#111] bg-[#ffbc00] shadow-[8px_8px_0_0_#111] sm:border-[7px] sm:shadow-[14px_14px_0_0_#111]">
            <span className="text-[clamp(58px,15vw,150px)] leading-none font-black">
              0
            </span>
          </span>
          <span className="text-[clamp(88px,26vw,248px)] leading-none font-black tracking-tighter">
            4
          </span>
        </h1>

        {/* 메시지 */}
        <div className="mt-10 flex max-w-md flex-col items-center text-center">
          <p className="border-[3px] border-[#111] bg-[#111] px-4 py-2 font-mono text-xs font-bold tracking-[0.3em] text-[#f4f1e9] uppercase">
            page not found
          </p>
          <h2 className="mt-6 text-2xl font-black tracking-tight sm:text-3xl">
            찾을 수 없는 페이지입니다
          </h2>
          <p className="mt-3 font-mono text-sm text-[#444]">
            요청하신 주소가 사라졌거나, 잘못 입력되었습니다.
          </p>
        </div>

        {/* 홈 버튼 */}
        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-3 border-[3px] border-[#111] bg-[#111] px-8 py-4 font-mono text-sm font-bold tracking-[0.2em] text-[#f4f1e9] uppercase shadow-[6px_6px_0_0_#ffbc00] transition-all duration-150 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:bg-[#ffbc00] hover:text-[#111] hover:shadow-[9px_9px_0_0_#111] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none">
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          홈으로 돌아가기
        </Link>
      </section>

      {/* 하단 티커 */}
      <footer className="flex items-center justify-between gap-4 overflow-hidden border-t-[3px] border-[#111] bg-[#111] px-4 py-2 font-mono text-[10px] font-bold tracking-[0.2em] text-[#f4f1e9] uppercase sm:text-xs">
        <span className="whitespace-nowrap text-[#ffbc00]">404_error</span>
        <span className="hidden flex-1 truncate text-center text-[#777] sm:block">
          / lost / not_found / / lost / not_found / / lost / not_found /
        </span>
        <span className="whitespace-nowrap">{'>'} home</span>
      </footer>
    </main>
  )
}
