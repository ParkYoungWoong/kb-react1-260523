import { useNavigate, useSearchParams } from 'react-router'
import Button from '@/components/Button'

// '/signin?a=123&s=spider&apikey=1234567890'
export default function SignIn() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') // '/movies'

  function signIn(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const id = formData.get('id') as string
    const pw = formData.get('pw') as string
    if (id.trim() && pw.trim()) {
      // 로그인 성공!
      const accessToken =
        'username=abc&email=xyz&photo=imageurl&expires=20260613170000' // 액세스 토큰
      localStorage.setItem('accessToken', accessToken)
      navigate(redirectTo || '/')
    }
  }

  const inputClass =
    'border-line-2 bg-surface text-ink placeholder:text-ink-4 focus:border-kb-yellow focus:ring-kb-yellow/40 h-12 w-full rounded-[12px] border px-4 text-[15px] transition outline-none focus:ring-2'

  return (
    <section className="mx-auto flex w-full max-w-[440px] flex-col px-6 py-16">
      <div className="border-line bg-surface shadow-card rounded-[20px] border p-7 sm:p-8">
        <span className="bg-kb-yellow text-kb-black font-display mb-5 grid h-11 w-11 place-items-center rounded-[12px] text-[17px] font-bold">
          KB
        </span>
        <h1 className="font-display text-ink text-[24px] leading-tight font-bold">
          로그인
        </h1>
        <p className="text-ink-2 mt-1.5 text-[15px]">
          아이디와 비밀번호를 입력하세요.
        </p>

        {redirectTo && (
          <p className="bg-kb-yellow-soft text-ink-2 mt-4 rounded-[12px] px-4 py-2.5 text-[13px]">
            로그인 후 이전 페이지로 이동합니다.
          </p>
        )}

        <form
          onSubmit={signIn}
          className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="id"
              className="text-ink-2 text-[13px] font-bold">
              아이디
            </label>
            <input
              id="id"
              type="text"
              name="id"
              autoComplete="username"
              placeholder="아이디를 입력하세요"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="pw"
              className="text-ink-2 text-[13px] font-bold">
              비밀번호
            </label>
            <input
              id="pw"
              type="password"
              name="pw"
              autoComplete="current-password"
              placeholder="비밀번호를 입력하세요"
              className={inputClass}
            />
          </div>
          <Button
            type="submit"
            className="mt-2 w-full">
            로그인
          </Button>
        </form>
      </div>
    </section>
  )
}
