import Nav from 'layout/nav'
import { useDynamicRefs } from 'lib/hooks/useDynamicRefs'

const Header = () => {
  const { headerRef, activeRef } = useDynamicRefs()

  return (
    <header ref={headerRef} className='header' data-name={activeRef?.current?.id}>
      <Nav />
    </header>
  )
}

export default Header
