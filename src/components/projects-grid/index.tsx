import { useId, useRef } from 'react'

import projects from 'lib/copy/projects'
import getFlipProperties from 'lib/flip'
import { P } from 'components/typography'

const Cell = ({ id, handleOpen, title, imgSrc, projectRef }) => {
  // todo mayb can get some props out of projectRef
  const cellRef = useRef<HTMLImageElement>(null)

  const handleClick = () => {
    projectRef.current = cellRef.current
    console.log('OPEN', id)
    handleOpen(id)
  }

  return (
    <div className='projectsGrid__cell'>
      <img ref={cellRef} alt={title} onClick={handleClick} src={imgSrc} className='projectsCell' />
      <span onClick={handleOpen}>
        <P>{title}</P>
      </span>
    </div>
  )
}

const ProjectsGrid = ({ handleOpen, projectRef }) => {
  const id = useId()

  return (
    <div className='projectsGrid'>
      {Object.entries(projects).map(([key, { title, imgSrc }]) => (
        <Cell projectRef={projectRef} key={id + key} id={key} imgSrc={imgSrc} title={title} handleOpen={handleOpen} />
      ))}
    </div>
  )
}

export default ProjectsGrid
