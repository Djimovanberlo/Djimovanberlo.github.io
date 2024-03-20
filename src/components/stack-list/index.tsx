import { useId } from 'react'

const StackList = ({ stackArr }) => {
  const id = useId()

  return (
    <div className='stackList'>
      {stackArr.map((stack, index) => (
        <div key={id + index}>{stack}</div>
      ))}
    </div>
  )
}

export default StackList
