import { RefObject, useEffect, useState } from 'react'

const clamp = (value: number) => Math.max(0, value)

const isBetween = (value: number, floor: number, ceil: number) => value >= floor && value <= ceil

const useScrollspy = ({ refs, offset = 0 }: { refs: RefObject<HTMLElement>[]; offset: number }) => {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY

      const position = refs
        .map(ref => {
          const element = ref.current

          if (!element) return { id: '', top: -1, bottom: -1 }

          const rect = element.getBoundingClientRect()
          const top = clamp(rect.top + scroll - offset)
          const bottom = clamp(rect.bottom + scroll - offset)

          return { id: element.id, top, bottom }
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom))

      setActiveId(position?.id ?? '')
    }

    listener()

    window.addEventListener('resize', listener)
    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('resize', listener)
      window.removeEventListener('scroll', listener)
    }
  }, [refs, offset])

  return activeId
}

export default useScrollspy
