import { InputHTMLAttributes } from "react"

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const FormInput = ({label, name, ...rest} : FormInputProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-[0.6875rem] text-black text-lg leading-normal font-medium">{label}</label>
      <input {...rest} name={name} />
    </div>
  )
}

export default FormInput