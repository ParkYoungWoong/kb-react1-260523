import { redirect } from 'react-router'

interface Context {
  request: Request
}

export function requiresAuth({ request }: Context) {
  // request.url // 'http://localhost:5173/movies?a=1&b=2&c=3'
  const url = new URL(request.url)
  // url.pathname // '/movies'
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return true
  }
  // '/signin?redirectTo=/movies'
  return redirect(`/signin?redirectTo=${url.pathname}`)
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    return true
  }
  return redirect('/')
}
