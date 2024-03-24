import { useRef, useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import projects, { projectsIntro } from 'lib/copy/projects'
import Section from 'layout/section'
import ProjectsGrid from 'components/projects-grid'
import { H2, P } from 'components/typography'
import ProjectsModal from 'components/projects-modal'
import useFlip from 'lib/hooks/useFlip'

// TODO make whole flip thing in single hook that returns Refs and Functions
// TODO CELL ref, IMG ref, open flip, close flip funtions out of hook
// TODO modal ref in this component
// TODO assign style display: none | display: block to modal ref with open / close functions in this component
// TODO pass handleOpen and handleClose to modal component and grid component
const ProjectsSection = () => {
  const { firstRef, secondRef, flip, flipBack } = useFlip()
  const modalRef = useRef<any>(null)
  // const imgRef = useRef<HTMLImageElement>(null)
  // const projectRef = useRef<HTMLDivElement>(null)
  const [projectsState, setProjectsState] = useState<string | null>(null)

  // const handleChangeActiveProject = (projectId: string | null) => {
  //   setProjectsState(projectId)
  // setProjectsState(projects[projectKey] ?? '')
  // }

  const handleOpen = (id: string) => {
    console.log('ID', id)
    if (!modalRef.current) return
    setProjectsState(id)
    modalRef.current.style.display = 'grid'

    flip()
  }

  const handleClose = () => {
    if (!modalRef.current) return
    setProjectsState(null)

    modalRef.current.style.display = 'none'
    flipBack()
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
