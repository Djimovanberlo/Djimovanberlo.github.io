import Button from 'components/button'
import ButtonCollection from 'components/button-collection'
import { SectionNames } from 'interfaces/layout'
import { useDynamicRefs } from 'lib/hooks/useDynamicRefs'

const Nav = () => {
  const { activeRef, sectionRefs } = useDynamicRefs()

  const handleClick = sectionName => () => {
    const sectionRef = sectionRefs.find(ref => ref?.current?.id === sectionName.toLowerCase())
    if (sectionRef && sectionRef.current) sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const buttons = Object.keys(SectionNames).map((sectionName, index) => ({
    buttonName: sectionName,
    text: index === 0 ? 'Djimo' : sectionName,
  }))

  const activeIndex = buttons.findIndex(({ buttonName }) => buttonName.toLocaleLowerCase() === activeRef?.current?.id)

  return (
    <nav className='nav'>
      <ButtonCollection activeIndex={activeIndex}>
        {buttons.map(({ buttonName, text }, index) => {
          const isActive = activeIndex === index
          return (
            <Button key={index} name={buttonName} isActive={isActive} handleClick={handleClick(buttonName)}>
              {text}
            </Button>
          )
        })}
      </ButtonCollection>
    </nav>
  )
}

export default Nav
