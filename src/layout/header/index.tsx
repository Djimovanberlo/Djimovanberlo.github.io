import Nav from 'layout/nav'
import { SectionNames } from 'interfaces/layout'
import { useScrollspy } from 'lib/hooks/useScrollSpy'
import { useRef } from 'react'

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null)
  const headerHeight = headerRef.current?.clientHeight ?? 0
  const sectionIds = Object.values(SectionNames)
  const activeId = useScrollspy({ ids: sectionIds, offset: headerHeight })

  return (
    <header ref={headerRef} className='header' data-name={activeId}>
      <Nav activeId={activeId} />
    </header>
  )
}

export default Header
