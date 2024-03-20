import { createContext, useState, ReactNode, useContext, useCallback, useRef, RefObject } from 'react'

import useScrollspy from './useScrollSpy'

interface DynamicRefsContextType {
  headerRef: RefObject<HTMLElement> | null
  sectionRefs: RefObject<HTMLElement>[]
  addSectionRef: (ref: RefObject<HTMLElement>) => void
  activeId: string
}

const DynamicRefsContext = createContext<DynamicRefsContextType>({
  headerRef: null,
  sectionRefs: [],
  addSectionRef: () => {},
  activeId: '',
})

interface Props {
  children: ReactNode
}

export const DynamicRefsProvider = ({ children }: Props) => {
  const headerRef = useRef<HTMLElement>(null)
  const headerHeight = headerRef.current?.clientHeight ?? 0
  const [sectionRefs, setSectionRefs] = useState<RefObject<HTMLElement>[]>([])
  const activeId = useScrollspy({ refs: sectionRefs, offset: headerHeight })

  const addSectionRef = useCallback((ref: RefObject<HTMLElement>) => {
    setSectionRefs(prevRefs => [...prevRefs, ref])
  }, [])

  return <DynamicRefsContext.Provider value={{ headerRef, sectionRefs, addSectionRef, activeId }}>{children}</DynamicRefsContext.Provider>
}

export const useDynamicRefs = () => useContext(DynamicRefsContext)

export default DynamicRefsContext
