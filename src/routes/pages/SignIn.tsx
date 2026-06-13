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
      const accessToken = 'helloworldB92E255C-1AFC-4772-8BCA-9AA4C91905B2' // 액세스 토큰
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
        />
        <input
          type="password"
          name="pw"
        />
        <button>로그인</button>
      </form>
    </>
  )
}
