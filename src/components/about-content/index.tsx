import { Stack } from 'components/tech-stack'
import { H2, P } from 'components/typography'

const AboutContent = ({ className = '', title, text, stack, imgSrc }) => {
  return (
    <div className={`aboutContent ${className}`}>
      <H2 isUnderlined>{title}</H2>
      <div className='aboutContent__imageText'>
        <div className='aboutContent__textWrapper'>
          <P>{text}</P>
          {!!stack.length && <Stack techStack={stack} />}
        </div>
        <div className='aboutContent__imageWrapper'>
          {<img alt={imgSrc} src={imgSrc} />}
        </div>
      </div>
    </div>
  )
}

export default AboutContent
