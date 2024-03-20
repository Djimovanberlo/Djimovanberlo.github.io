import { RxCross2 } from 'react-icons/rx'

import getFlipProperties from 'lib/flip'
import TechStack from 'components/tech-stack'
import { H3, P } from 'components/typography'

const ProjectsModal = ({ imgRef, projectsRef, projectData }) => {
  const { title, text, imgSrc, githubLink, projectLink, stack } = projectData

  const handleClick = () => {
    const dataImage = imgRef?.current?.getAttribute('data-image')
    const cell = document.querySelector(`[data-key="${dataImage}"]`)

    const modalEl = imgRef.current.parentElement
    const prevRect = imgRef.current.getBoundingClientRect()
    const finalRect = cell?.getBoundingClientRect()!

    modalEl.style.display = 'none'
    projectsRef.current.style.opacity = 1
    projectsRef.current.style.setProperty(
      'transition',
      'opacity 0.5s ease-in-out'
    )

    const { transforms, options } = getFlipProperties({
      prevRect,
      finalRect,
    })

    cell?.animate(transforms, options)
  }

  return (
    <div className='projectsModal'>
      <img
        ref={imgRef}
        src={imgSrc}
        alt='projectImg'
        className='projectsModal__img'
      />
      <div className='projectsModal__title'>
        <H3>{title}</H3>
        <RxCross2 onClick={handleClick} />
      </div>
      <P className='projectsModal__body'>{text}</P>
      <TechStack
        className='projectsModal__stack'
        techStack={stack}
        githubLink={githubLink}
        projectLink={projectLink}
      />
    </div>
  )
}

export default ProjectsModal
