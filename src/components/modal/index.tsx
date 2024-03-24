import { useEffect, useRef } from 'react'
import { RxCross2 } from 'react-icons/rx'

const Modal = ({ className = '', isOpen, handleClose, children }) => {
  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const dialogRect = modalRef.current?.getBoundingClientRect()

      if (dialogRect) {
        const isInDialog = e.clientY >= dialogRect.top && e.clientY <= dialogRect.bottom && e.clientX >= dialogRect.left && e.clientX <= dialogRect.right

        if (!isInDialog) handleClose()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [handleClose])

  useEffect(() => {
    if (isOpen) return modalRef.current?.showModal()
    return modalRef.current?.close()
  }, [isOpen])

  return (
    <dialog className={className} ref={modalRef} onCancel={handleClose}>
      <RxCross2 onClick={handleClose} />
      {children}
    </dialog>
  )
}

export default Modal
