import { useId, useRef } from 'react'

import projects from 'lib/copy/projects'
import { P } from 'components/typography'

const Cell = ({ handleOpen, title, imgSrc, projectRef }) => {
  // todo mayb can get some props out of projectRef
  const cellRef = useRef<HTMLImageElement>(null)

  const handleClick = () => {
    projectRef.current = cellRef.current
    // console.log('CLICKED', projectRef.current)
    handleOpen()
  }

  return (
    <div className='projectsGrid__cell'>
      <img ref={cellRef} alt={title} onClick={handleClick} src={imgSrc} className='projectsCell' />
      <span onClick={handleClick}>
        <P>{title}</P>
      </span>
    </div>
  )
}

const ProjectsGrid = ({ handleOpen, projectRef }) => {
  const id = useId()

  return (
    <div className='projectsGrid'>
      {Object.entries(projects).map(([key, { title, imgSrc }]) => {
        const openModal = () => handleOpen(key)
        return <Cell projectRef={projectRef} key={id + key} imgSrc={imgSrc} title={title} handleOpen={openModal} />
      })}
    </div>
  )
}

export default ProjectsGrid
