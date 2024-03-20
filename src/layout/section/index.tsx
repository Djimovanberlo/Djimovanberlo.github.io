import { ReactNode, useEffect, useRef } from 'react'

import { SectionNames } from 'interfaces/layout'
import { useDynamicRefs } from 'lib/hooks/useDynamicRefs'

interface Props {
  name: SectionNames
  children: ReactNode
}

const Section = ({ name, children }: Props) => {
  const { addSectionRef } = useDynamicRefs()
  const sectionRef = useRef(null)

  useEffect(() => {
    addSectionRef(sectionRef)
  }, [addSectionRef])

  return (
    <section id={name} ref={sectionRef} className={`section ${name}`}>
      {children}
    </section>
  )
}

export default Section
