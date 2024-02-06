'use server'

import { z } from 'zod'
import { revalidateTag } from 'next/cache'
import getOneMemberAction from './getOneMemberAction'
const schema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string({
    invalid_type_error: 'Invalid Email',
  }).email({ message: "Invalid email address" }),
})

const editMemberAction = async (id: number, _prevState: unknown, formData: FormData) => {
  try {
    const member = await getOneMemberAction(id)

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

    if (member) {
      const res = await fetch(`http://localhost:3007/team-members/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.get('first-name'),
          last_name: formData.get('last-name'),
          email: formData.get('email'),
        })
      })

      if (!res.ok) {
        throw new Error("Failed to edit member!")
      }

      const data = await res.json()
      revalidateTag("team_members")
      return {
        success: "Success, team member edited!",
        data
      }
    }
  }
  catch (error: any) {
    return {
      errors: error.toString()
    }
  }
}

export default editMemberAction;