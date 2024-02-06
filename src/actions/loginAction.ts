'use server'

import { z } from 'zod'
const schema = z.object({
  username: z.string({
    invalid_type_error: 'Invalid Email',
  }).email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be 6 or more characters long" }),
})

const loginAction = async (prevState: unknown, formData: FormData) => {
  try {
    const validatedFields = schema.safeParse({
      username: formData.get('username'),
      password: formData.get('password'),
    })

    if (!validatedFields.success) {
      let errorMessage = "";

      validatedFields.error.issues.forEach((issue) => {
        errorMessage += `${issue.message}. `
      })
      return {
        errors: errorMessage,
      }
    }

    const res = await fetch(`http://localhost:3007/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.get('username'),
        password: formData.get('password')
      })
    })

    if (!res.ok) {
      throw new Error("Failed to login, verify your credentials")
    }

    const data = await res.json()
    return {
      success: "Login successful!",
      data
    }
  }
  catch (error: any) {
    return {
      errors: error.toString(),
    }
  }
}

export default loginAction