import { ReactNode } from 'react'

import { SectionNames } from 'interfaces/layout'

interface Props {
  name: SectionNames
  children: ReactNode
}

const Section = ({ name, children }: Props) => {
  return (
    <section id={name} className={`section ${name}`}>
      {children}
    </section>
  )
}

export default Section
