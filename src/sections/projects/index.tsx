import { useRef, useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import { projectsIntro } from 'lib/copy/projects'
import useFlip from 'lib/hooks/useFlip'
import Section from 'layout/section'
import ProjectsGrid from 'components/projects-grid'
import { H2, P } from 'components/typography'
import ProjectsModal from 'components/projects-modal'

const ProjectsSection = () => {
  const { firstRef, secondRef, flip, flipBack } = useFlip()
  const modalRef = useRef<HTMLElement>(null)
  const [projectsState, setProjectsState] = useState<string | null>(null)

  const handleOpen = (id: string) => {
    if (!modalRef.current) return
    setProjectsState(id)
    modalRef.current.style.display = 'block'

    requestAnimationFrame(() => {
      flip()
    })
  }

  const handleClose = () => {
    setProjectsState(null)
    flipBack()

    requestAnimationFrame(() => {
      if (!modalRef.current) return
      modalRef.current.style.display = 'none'
    })
  }

  return (
    <Section name={SectionNames.Projects}>
      <ProjectsModal handleClose={handleClose} imgRef={secondRef} modalRef={modalRef} projectId={projectsState} />
      <div className='projects__container'>
        <H2 isUnderlined>Projects</H2>
        <P>{projectsIntro}</P>
        <ProjectsGrid handleOpen={handleOpen} projectRef={firstRef} />
      </div>
    </Section>
  )
}

export default ProjectsSection
