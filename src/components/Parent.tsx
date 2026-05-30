import { useState } from 'react'
import type { ReactNode } from 'react'

interface Props {
  varient: string
  children: ReactNode
  // children: React.ReactNode
}

export default function Parent({ varient, children }: Props) {
  function renderButton() {
    switch (varient) {
      case 'elevated':
        return <button>{children}</button>
      case 'outlined':
        return <button>{children}</button>
      case 'flat':
        return <button>{children}</button>
      case 'text':
        return <button>{children}</button>
    }
  }
  return <>{renderButton()}</>
}
