import { CSSProperties, useId } from 'react'
import { GoArrowDown } from 'react-icons/go'

import { SectionNames } from 'interfaces/layout'
import Section from 'layout/section'
import { H1, H2 } from 'components/typography'

const BannerSection = () => {
  const id = useId()

  const djimoArr = 'Djimo van Berlo'.split('')

  const uniqueRandomNums: number[] = []
  while (uniqueRandomNums.length < djimoArr.length) {
    const randomNum = Math.floor(Math.random() * djimoArr.length)
    if (!uniqueRandomNums.includes(randomNum)) uniqueRandomNums.push(randomNum)
  }

  const djimoArrWithRandomNums = djimoArr.map((letter, index) => ({
    letter,
    num: uniqueRandomNums[index],
  }))

  const handleClickScroll = evt => {
    evt.preventDefault()
    const element = document.getElementById(SectionNames.About)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section name={SectionNames.Banner}>
      <div className='banner__container'>
        <H1>
          {djimoArrWithRandomNums.map(({ letter, num }, index) => (
            <span key={id + index} style={{ '--delay': num } as CSSProperties}>
              {letter}
            </span>
          ))}
        </H1>
        <H2 style={{ '--delay': djimoArr.length } as CSSProperties}>
          Frontend Developer
        </H2>
      </div>
      <GoArrowDown
        onClick={handleClickScroll}
        style={{ '--delay': djimoArr.length } as CSSProperties}
        className='banner__arrow'
      />
    </Section>
  )
}

export default BannerSection
