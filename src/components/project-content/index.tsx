import StackList from 'components/stack-list'
import { P } from 'components/typography'

const ProjectContent = ({ text, stackArr }) => {
  return (
    <div className='projectContent'>
      <P>{text}</P>
      <StackList stackArr={stackArr} />
    </div>
  )
}

export default ProjectContent
