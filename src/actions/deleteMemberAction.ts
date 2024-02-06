'use server'

import { revalidateTag } from "next/cache"

const deleteMemberAction = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3007/team-members/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if(!res.ok) {
      throw new Error("Failed to delete member!")
    }

    revalidateTag("team_members")
    const data = await res.json()
    return {
      success: "Success, team member deleted!",
      data
    }
  }
  catch(error: any) {
    return {
      errors: error.toString()
    }
  }
}

export default deleteMemberAction