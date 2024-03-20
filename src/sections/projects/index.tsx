import { useRef, useState } from 'react'

import { SectionNames } from 'interfaces/layout'
import projects, { projectsIntro } from 'lib/copy/projects'
import Section from 'layout/section'
import ProjectsGrid from 'components/projects-grid'
import { H2, P } from 'components/typography'
import ProjectsModal from 'components/projects-modal'

const ProjectsSection = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const [projectsState, setProjectsState] = useState(projects.portfolio)

  const handleChangeActiveProject = (projectKey: string) => {
    setProjectsState(projects[projectKey] ?? '')
  }

  return (
    <Section name={SectionNames.Projects}>
      <ProjectsModal imgRef={imgRef} projectsRef={projectsRef} projectData={projectsState} />
      <div ref={projectsRef} className='projects__container'>
        <H2 isUnderlined>Projects</H2>
        <P>{projectsIntro}</P>
        <ProjectsGrid imgRef={imgRef} projectsRef={projectsRef} handleChangeActiveProject={handleChangeActiveProject} />
      </div>
    </Section>
  )
}

export default ProjectsSection
