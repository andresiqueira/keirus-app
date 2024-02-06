'use client'

import { useFormState } from 'react-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormHTMLAttributes, useEffect } from "react"
import { useRouter } from 'next/navigation';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  submitHandle: any;
}

const initialState = {
  errors: '',
  success: '',
}

const Form = ({ submitHandle, children, ...rest }: FormProps) => {
  const [state, formAction] = useFormState(submitHandle, initialState)
  const router = useRouter()

  useEffect(() => {
    if (state && state.errors) {
      toast.error(state.errors, {
        position: "top-right",
        theme: 'colored',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: 0,
        toastId: "error"
      })
    }

    if (state && state.success) {
      toast.success(state.success, {
        position: "top-right",
        theme: 'colored',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: 0,
        toastId: "success"
      })
      router.push("/dashboard/team_members");
    }

  }, [state, router])


  return (
    <>
      <form action={formAction} {...rest} >
        {children}
      </form>
    </>
  )
}

export default Form