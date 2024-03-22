import { useId, useRef } from 'react'

import projects from 'lib/copy/projects'
import getFlipProperties from 'lib/flip'
import { P } from 'components/typography'

const Cell = ({ id, title, imgSrc, imgRef, projectsRef, handleChangeActiveProject, singleProjectRef }) => {
  const cellRef = useRef<HTMLImageElement>(null)

  const handleClick = () => {
    handleChangeActiveProject(id)
    const modalEl = imgRef.current.parentElement

    modalEl.style.setProperty('display', 'grid')
    // projectsRef.current.style.setProperty('opacity', 0)
    // projectsRef.current.style.setProperty('transition', 'opacity 0.5s ease-in-out')

    const prevRect = cellRef?.current?.getBoundingClientRect()!
    const finalRect = imgRef.current.getBoundingClientRect()

    const { transforms, options } = getFlipProperties({ prevRect, finalRect })

    imgRef.current.animate(transforms, options)
    singleProjectRef.current = cellRef.current
  }

  return (
    <div className='projectsGrid__cell'>
      <img ref={cellRef} alt={title} data-key={title} onClick={handleClick} src={imgSrc} className='projectsCell' />
      <span onClick={handleClick}>
        <P>{title}</P>
      </span>
    </div>
  )
}

const ProjectsGrid = ({ imgRef, projectsRef, handleChangeActiveProject, singleProjectRef }) => {
  const id = useId()

  return (
    <div className='projectsGrid'>
      {Object.entries(projects).map(([key, { title, imgSrc }]) => (
        <Cell singleProjectRef={singleProjectRef} key={id + key} id={key} imgSrc={imgSrc} title={title} imgRef={imgRef} projectsRef={projectsRef} handleChangeActiveProject={handleChangeActiveProject} />
      ))}
    </div>
  )
}

export default ProjectsGrid
