import { useNavigate } from 'react-router'

export default function SignIn() {
  const navigate = useNavigate()
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
      navigate('/')
    }
  }
  return (
    <>
      <h1>Sign In!</h1>
      <form onSubmit={signIn}>
        <input
          type="text"
          name="id"
          className="border"
        />
        <input
          type="password"
          name="pw"
          className="border"
        />
        <button>로그인</button>
      </form>
    </>
  )
}
