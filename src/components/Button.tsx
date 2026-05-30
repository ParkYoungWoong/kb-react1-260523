import type { ReactNode } from 'react'

interface Props {
  loading?: boolean
  children?: ReactNode
  onClick?: () => void
}

export default function Button({ loading, children, onClick }: Props) {
  return (
    <button onClick={() => onClick()}>
      {loading ? '로딩 중...' : children}
    </button>
  )
}
