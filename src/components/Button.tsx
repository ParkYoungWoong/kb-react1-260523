import type { ReactNode, ButtonHTMLAttributes } from 'react'
import Loader from '@/components/Loader'

// interface Props extends React.ButtonHTMLAttributes<> { // React Namespace 사용 시..
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children?: ReactNode
}

export default function Button({ loading, children, ...restProps }: Props) {
  return (
    <button
      {...restProps}
      className="bg-kb-yellow text-kb-black hover:bg-kb-yellow-strong relative inline-flex h-12 items-center justify-center rounded-[12px] px-5 text-[15px] font-bold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40">
      {loading ? <Loader size={20} /> : children}
    </button>
  )
}
