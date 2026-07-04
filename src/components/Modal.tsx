interface Props {
  children: React.ReactNode
  onClose: () => void
}

export default function Modal({ children, onClose }: Props) {
  return (
    <div className="modal fixed inset-0 z-50 flex items-center justify-center p-5">
      <style>{`
        @keyframes kbModalIn { from { opacity: 0; transform: translateY(8px) scale(.98) } to { opacity: 1; transform: none } }
        .kb-modal-content { animation: kbModalIn .18s ease-out }
        @media (prefers-reduced-motion: reduce) { .kb-modal-content { animation: none } }
      `}</style>
      <div
        className="overlay bg-ink/45 absolute inset-0 backdrop-blur-sm"
        onClick={() => onClose()}></div>
      <div className="kb-modal-content bg-surface shadow-pop relative z-1 max-h-[calc(100%-40px)] w-full max-w-[520px] overflow-y-auto rounded-[20px] p-6">
        <button
          type="button"
          aria-label="닫기"
          onClick={() => onClose()}
          className="text-ink-3 hover:bg-line hover:text-ink absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full transition-colors">
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}

// <Modal>나는 모달!</Modal>
