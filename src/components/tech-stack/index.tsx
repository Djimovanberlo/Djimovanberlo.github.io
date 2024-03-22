import { ReactNode, useId } from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiContentful, SiNextdotjs, SiStyledcomponents, SiTailwindcss, SiSequelize } from 'react-icons/si'
import { BiLinkExternal, BiLogoReact, BiLogoTypescript, BiLogoGraphql, BiLogoCss3, BiLogoSass, BiLogoFirebase, BiLogoRedux, BiLogoBootstrap } from 'react-icons/bi'

export enum StackNames {
  React = 'react',
  TypeScript = 'typeScript',
  NextJs = 'nextJs',
  redux = 'redux',
  GraphQL = 'graphQL',
  CSS = 'css',
  Sass = 'sass',
  StyledComponents = 'styledComponents',
  Tailwind = 'tailwind',
  Firebase = 'firebase',
  Contentful = 'contentFul',
  Sequelize = 'sequelize',
  Bootstrap = 'bootstrap',
}

interface Props {
  className?: string
  techStack: StackNames[]
  githubLink: string
  projectLink: string
}

const stackIcons: Record<StackNames, ReactNode> = {
  [StackNames.React]: <BiLogoReact title={StackNames.React} />,
  [StackNames.TypeScript]: <BiLogoTypescript title={StackNames.TypeScript} />,
  [StackNames.NextJs]: <SiNextdotjs title={StackNames.NextJs} />,
  [StackNames.redux]: <BiLogoRedux title={StackNames.redux} />,
  [StackNames.GraphQL]: <BiLogoGraphql title={StackNames.GraphQL} />,
  [StackNames.CSS]: <BiLogoCss3 title={StackNames.CSS} />,
  [StackNames.Sass]: <BiLogoSass title={StackNames.Sass} />,
  [StackNames.StyledComponents]: <SiStyledcomponents title={StackNames.StyledComponents} />,
  [StackNames.Tailwind]: <SiTailwindcss title={StackNames.Tailwind} />,
  [StackNames.Firebase]: <BiLogoFirebase title={StackNames.Firebase} />,
  [StackNames.Contentful]: <SiContentful title={StackNames.Contentful} />,
  [StackNames.Sequelize]: <SiSequelize title={StackNames.Sequelize} />,
  [StackNames.Bootstrap]: <BiLogoBootstrap title={StackNames.Bootstrap} />,
}

export const Stack = ({ techStack }: Pick<Props, 'techStack'>) => {
  const id = useId()

  return (
    <div className='stack'>
      {techStack.map(tech => (
        <div key={id + tech} className='techIcon'>
          {stackIcons[tech]}
        </div>
      ))}
    </div>
  )
}

const TechStack = ({ className = '', techStack = [], githubLink, projectLink }: Props) => {
  const handleGithubClick = () => {
    window.open(githubLink, '_blank')
  }

  const handleProjectClick = () => {
    window.open(projectLink, '_blank')
  }

  return (
    <div className={`techStack ${className}`}>
      {githubLink && <FaGithub className='techIcon techStack__github' onClick={handleGithubClick} />}
      <Stack techStack={techStack} />
      {projectLink && <BiLinkExternal className='techIcon techStack__project' onClick={handleProjectClick} />}
    </div>
  )
}

export default TechStack
