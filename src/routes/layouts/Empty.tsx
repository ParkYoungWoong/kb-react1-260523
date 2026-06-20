import { Outlet, ScrollRestoration } from 'react-router'

export default function Empty() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
