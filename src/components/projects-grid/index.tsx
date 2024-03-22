import { useId, useRef } from 'react'

import projects from 'lib/copy/projects'
import getFlipProperties from 'lib/flip'
import { P } from 'components/typography'

const Cell = ({ id, title, imgSrc, imgRef, handleChangeActiveProject, projectRef }) => {
  // todo mayb can get some props out of projectRef
  const cellRef = useRef<HTMLImageElement>(null)

  const handleClick = () => {
    handleChangeActiveProject(id ?? null)

    const prevRect = cellRef?.current?.getBoundingClientRect()!
    const finalRect = imgRef.current.getBoundingClientRect()

    console.log('GRID', 'prev(cell)', prevRect, 'final(img)', finalRect)

    const { transforms, options } = getFlipProperties({ prevRect, finalRect })

    imgRef.current.animate(transforms, options)
    projectRef.current = cellRef.current
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

const ProjectsGrid = ({ imgRef, handleChangeActiveProject, projectRef }) => {
  const id = useId()

  return (
    <div className='projectsGrid'>
      {Object.entries(projects).map(([key, { title, imgSrc }]) => (
        <Cell projectRef={projectRef} key={id + key} id={key} imgSrc={imgSrc} title={title} imgRef={imgRef} handleChangeActiveProject={handleChangeActiveProject} />
      ))}
    </div>
  )
}

export default ProjectsGrid
