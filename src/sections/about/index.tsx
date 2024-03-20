import { useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import about from 'lib/copy/about'
import Section from 'layout/section'
import ButtonCollection from 'components/button-collection'
import AboutContent from 'components/about-content'
import Timeline from 'components/timeline'

const AboutSection = () => {
  const [aboutState, setAboutState] = useState(about.personal)

  const handleClick = evt => {
    evt.preventDefault()
    const buttonText = evt.target.textContent
    setAboutState(about[buttonText])
  }

  const buttons = Object.keys(about).map((buttonName, index) => ({
    buttonName,
    text: buttonName,
  }))
  const activeButtonIndex = buttons
    .map(({ buttonName }) => buttonName)
    .findIndex(buttonName => buttonName === aboutState.title.toLowerCase())

  return (
    <Section name={SectionNames.About}>
      <div className='about__container'>
        <AboutContent
          key={aboutState.title}
          className={`about__content${aboutState.title}`}
          title={aboutState.title}
          text={aboutState.text}
          stack={aboutState.stack}
          imgSrc={aboutState.img}
        />
        <ButtonCollection
          activeIndex={activeButtonIndex}
          buttons={buttons}
          handleClick={handleClick}
        />
        <Timeline />
      </div>
    </Section>
  )
}

export default AboutSection
