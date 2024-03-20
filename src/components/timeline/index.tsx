import { timeLine } from 'lib/copy/about'
import { P } from 'components/typography'

const TimelineIcon = ({ tooltipText, icon }) => (
  <div className='timelineIcon'>
    <P className='tooltip'>{tooltipText}</P>
    <img src={icon} alt='timeline img' />
  </div>
)

const Timeline = () => {
  const data = timeLine.flatMap(({ icon, tooltipText }, index) => {
    const element = <TimelineIcon key={index} tooltipText={tooltipText} icon={icon} />
    const isLastItem = index === timeLine.length - 1
    const separator = !isLastItem ? <div key={`hr-${index}`} className='timeline__line' /> : null

    return [element, separator]
  })

  return <div className='timeline'>{data}</div>
}

export default Timeline
