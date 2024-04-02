import { createContext, useState, ReactNode, useContext, useCallback, useRef, RefObject } from 'react'

import useScrollspy from './useScrollSpy'

interface DynamicRefsContextType {
  headerRef: RefObject<HTMLElement> | null
  sectionRefs: RefObject<HTMLElement>[]
  addSectionRef: (ref: RefObject<HTMLElement>) => void
  activeRef: RefObject<HTMLElement> | null // Add this li
}

const DynamicRefsContext = createContext<DynamicRefsContextType>({
  headerRef: null,
  sectionRefs: [],
  addSectionRef: () => {},
  activeRef: null,
})

interface Props {
  children: ReactNode
}

export const DynamicRefsProvider = ({ children }: Props) => {
  const headerRef = useRef<HTMLElement>(null)
  const headerHeight = headerRef.current?.clientHeight ?? 0
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLElement>[]>([])
  const activeRef = useScrollspy({ refs: sectionRefs, offset: headerHeight })

  const addSectionRef = useCallback((ref: RefObject<HTMLElement>) => {
    setSectionRefs(prevRefs => [...prevRefs, ref])
  }, [])

  return <DynamicRefsContext.Provider value={{ headerRef, sectionRefs, addSectionRef, activeRef }}>{children}</DynamicRefsContext.Provider>
}

export const useDynamicRefs = () => useContext(DynamicRefsContext)

export default DynamicRefsContext
