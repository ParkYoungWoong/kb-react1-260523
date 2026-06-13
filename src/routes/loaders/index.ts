import { redirect } from 'react-router'

interface Context {
  request: Request
}

export function requiresAuth({ request }: Context) {
  // request.url // 'http://localhost:5173/movies?a=1&b=2&c=3'
  const url = new URL(request.url)
  // url.pathname // '/movies'
  // url.search // '?a=1&b=2&c=3'
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    return true
  }
  // '/signin?redirectTo=/movies?username=박영웅&email=xyz@heropy.dev'
  const redirectTo = url.pathname + url.search
  return redirect(`/signin?redirectTo=${encodeURIComponent(redirectTo)}`)
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  if (!accessToken) {
    return true
  }
  return redirect('/')
}
