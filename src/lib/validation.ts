import { object, string } from 'yup'

export const validationSchemaContact = object({
  userName: string().required('Name is required'),
  email: string().email('Email is invalid').required('Email is required'),
  message: string().required('Message is required'),
})
