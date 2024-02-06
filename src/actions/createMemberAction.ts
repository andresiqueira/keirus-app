'use server'

import { z } from 'zod'
import { revalidateTag } from 'next/cache'
const schema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }).email({ message: "Invalid email address" }),
})

const createMemberAction = async (_prevState: unknown, formData: FormData) => {
  try {
    const validatedFields = schema.safeParse({
      firstName: formData.get('first-name'),
      lastName: formData.get('last-name'),
      email: formData.get('email'),
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
  
    const res = await fetch("http://localhost:3007/team-members/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          first_name: formData.get('first-name'),
          last_name: formData.get('last-name'),
          email: formData.get('email'),
      })
    })

    if(!res.ok) {
      throw new Error("Failed to create member!")
    }

    const data = await res.json()
    revalidateTag("team_members")
    return {
      success: "Success, team member created!",
      data
    }
  }
  catch(error: any) {
    return {
      errors: error.toString()
    }
  }
}

export default createMemberAction