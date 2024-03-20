import Nav from 'layout/nav'
import { useDynamicRefs } from 'lib/hooks/useDynamicRefs'

const Header = () => {
  const { headerRef, activeId } = useDynamicRefs()

  return (
    <header ref={headerRef} className='header' data-name={activeId}>
      <Nav />
    </header>
  )
}

export default Header
