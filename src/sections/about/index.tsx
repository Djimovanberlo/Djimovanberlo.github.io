import { useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import about from 'lib/copy/about'
import Section from 'layout/section'
import ButtonCollection from 'components/button-collection'
import AboutContent from 'components/about-content'
import Timeline from 'components/timeline'
import Button from 'components/button'

const AboutSection = () => {
  const [aboutState, setAboutState] = useState(about.personal)

  const handleClick = evt => {
    evt.preventDefault()
    const buttonText = evt.target.textContent
    setAboutState(about[buttonText] ?? '')
  }

  const buttons = Object.keys(about).map(buttonName => ({
    buttonName,
    text: buttonName,
  }))

  const activeIndex = buttons.findIndex(({ buttonName }) => buttonName.toLocaleLowerCase() === aboutState.title.toLocaleLowerCase())

  return (
    <Section name={SectionNames.About}>
      <div className='about__container'>
        <AboutContent key={aboutState.title} className={`about__content${aboutState.title}`} title={aboutState.title} text={aboutState.text} stack={aboutState.stack} imgSrc={aboutState.img} />
        <ButtonCollection activeIndex={activeIndex}>
          {buttons.map(({ buttonName, text }, index) => {
            const isActive = activeIndex === index
            return (
              <Button key={index} name={buttonName} isActive={isActive} handleClick={handleClick}>
                {text}
              </Button>
            )
          })}
        </ButtonCollection>
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
