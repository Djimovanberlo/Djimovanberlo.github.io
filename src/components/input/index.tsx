import { ChangeEvent } from 'react'

import { Label } from 'components/typography'

interface Props {
  className?: string
  type: string
  name: string
  value: string
  placeholder: string
  labelText: string
  error?: string
  touched?: boolean
  onBlur: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const InputTextField = ({
  className = '',
  name,
  value,
  placeholder,
  labelText,
  error,
  touched,
  onBlur,
  onChange,
}: Omit<Props, 'type'>) => (
  <div className='input'>
    <Label>{labelText}</Label>
    <textarea
      className={`input__field input__textArea ${className}`}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      required
      name={name}
      placeholder={placeholder}
    />
    {error && touched && <Label className='input__feedback'>{error}</Label>}
  </div>
)

export const Input = ({
  className = '',
  type,
  name,
  value,
  placeholder,
  labelText,
  error,
  touched,
  onBlur,
  onChange,
}: Props) => (
  <div className='input inputText'>
    <Label>{labelText}</Label>
    <input
      className={`input__field ${className}`}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      required
      type={type}
      name={name}
      placeholder={placeholder}
    />
    {error && touched && <Label className='input__feedback'>{error}</Label>}
  </div>
)
