import { SectionNames } from 'interfaces/layout'
import ContactForm from 'components/contact-form'
import { H2, P } from 'components/typography'
import Section from 'layout/section'
import { contactIntro } from 'lib/copy/contact'

const ContactSection = () => (
  <Section name={SectionNames.Contact}>
    <div className='contact__container'>
      <H2 isUnderlined>Contact</H2>
      <P>{contactIntro}</P>
      <ContactForm />
    </div>
  </Section>
)

export default ContactSection
