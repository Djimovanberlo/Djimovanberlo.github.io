import { RxCross2 } from 'react-icons/rx'

import projects from 'lib/copy/projects'
import TechStack from 'components/tech-stack'
import { H3, P } from 'components/typography'

const ProjectsModal = ({ handleClose, imgRef, projectId, modalRef }) => {
  const projectData = projects[projectId]

  // TODO clickoutside
  // useOnClickOutside(modalRef, handleClose)

  return (
    <div className='projectsModal' ref={modalRef}>
      <div className='projectsModal__grid'>
        <RxCross2 onClick={handleClose} />
        <img ref={imgRef} src={projectData?.imgSrc} alt='projectImg' />
        <H3>{projectData?.title}</H3>
        <P>{projectData?.text}</P>
        <TechStack techStack={projectData?.stack} githubLink={projectData?.githubLink} projectLink={projectData?.projectLink} />
      </div>
    </div>
  )
}

export default ProjectsModal
