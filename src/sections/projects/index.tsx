import { useRef, useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import projects, { projectsIntro } from 'lib/copy/projects'
import Section from 'layout/section'
import ProjectsGrid from 'components/projects-grid'
import { H2, P } from 'components/typography'
import ProjectsModal from 'components/projects-modal'

// TODO make whole flip thing in single hook that returns Refs and Functions
const ProjectsSection = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const [projectsState, setProjectsState] = useState<string | null>(null)

  const handleChangeActiveProject = (projectId: string | null) => {
    setProjectsState(projectId)
    // setProjectsState(projects[projectKey] ?? '')
  }

  return (
    <Section name={SectionNames.Projects}>
      <ProjectsModal imgRef={imgRef} projectId={projectsState} projectRef={projectRef} handleChangeActiveProject={handleChangeActiveProject} />
      <div className='projects__container'>
        <H2 isUnderlined>Projects</H2>
        <P>{projectsIntro}</P>
        <ProjectsGrid imgRef={imgRef} handleChangeActiveProject={handleChangeActiveProject} projectRef={projectRef} />
      </div>
    </Section>
  )
}

export default ProjectsSection
