import { useState } from 'react'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser'

import { validationSchemaContact } from 'lib/validation'
import { HoverButton } from 'components/button'
import { Input, InputTextField } from 'components/input'
import { P } from 'components/typography'

const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? ''
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? ''
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? ''

const ContactForm = () => {
  const [emailResult, setEmailResult] = useState('')

  const sendEmail = values => {
    emailjs.send(serviceId, templateId, values, publicKey).then(
      result => {
        setEmailResult('Email sent successfully!')
      },
      error => {
        setEmailResult('Email not sent! Contact djimovanberlo@gmail.com')
      }
    )
  }

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        userName: '',
        email: '',
        message: '',
      },
      validationSchema: validationSchemaContact,
      onSubmit: sendEmail,
    })

  return (
    <form className='contactForm' onSubmit={handleSubmit}>
      <Input
        labelText='name*'
        name='userName'
        placeholder='name'
        type='text'
        value={values.userName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.userName}
        touched={touched.userName}
      />
      <Input
        labelText='email*'
        name='email'
        placeholder='email'
        type='text'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        touched={touched.email}
      />
      <InputTextField
        labelText='message*'
        name='message'
        placeholder='message'
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.message}
        touched={touched.message}
      />
      <div className='contactForm__bot'>
        {emailResult && <P>{emailResult}</P>}
        <HoverButton type='submit'>Submit</HoverButton>
      </div>
    </form>
  )
}

export default ContactForm
