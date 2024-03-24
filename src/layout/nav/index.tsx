import ButtonCollection from 'components/button-collection'
import { SectionNames } from 'interfaces/layout'
import { useDynamicRefs } from 'lib/hooks/useDynamicRefs'

const Nav = () => {
  const { activeId } = useDynamicRefs()

  const handleClick = evt => {
    evt.preventDefault()

    const element = document.getElementById(evt.target.name.toLowerCase()) // TODO rmv getElementById (let AI clean this 1 up)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const buttons = Object.keys(SectionNames).map((sectionName, index) => ({
    buttonName: sectionName,
    text: index === 0 ? 'Djimo' : sectionName,
  }))

  const activeIndex = buttons.map(({ buttonName }) => buttonName).findIndex(buttonName => buttonName.toLocaleLowerCase() === activeId)

  return (
    <nav className='nav'>
      <ButtonCollection activeIndex={activeIndex} buttons={buttons} handleClick={handleClick} />
    </nav>
  )
}

export default Nav
