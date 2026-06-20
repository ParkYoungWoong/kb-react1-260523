import Modal from '@/components/Modal'
import { useState } from 'react'

export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  // if (true) {
  //   throw new Error('안녕 에러 강제 발생!!!!!!!!!!')
  // }
  return (
    <>
      <h1>About!</h1>
      <button onClick={() => setIsOpen(true)}>모달 열기!</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)}>나는 모달!</Modal>}
    </>
  )
}
