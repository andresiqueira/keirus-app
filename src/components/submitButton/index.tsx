'use client'

import { ButtonHTMLAttributes } from "react"
import { useFormStatus } from 'react-dom'

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const SubmitButton = ({ label, ...rest }: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <button {...rest} aria-disabled={pending} disabled={pending}>
      {label}
    </button>
  )
}

export default SubmitButton