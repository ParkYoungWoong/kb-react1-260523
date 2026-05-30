interface Props {
  size?: number
  label?: string
}

export default function Loader({ size = 32, label }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-3"
      role="status"
      aria-live="polite">
      <span
        className="border-line border-t-kb-yellow box-border inline-block animate-spin rounded-full"
        style={{
          width: size,
          height: size,
          borderWidth: Math.max(2, Math.round(size / 10))
        }}
        aria-hidden
      />
      {label && <p className="text-ink-3 text-[13px] font-medium">{label}</p>}
      <span className="sr-only">로딩 중</span>
    </div>
  )
}
