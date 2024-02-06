'use server'

import { revalidateTag } from "next/cache"
import getOneMemberAction from "./getOneMemberAction"

const deleteMemberAction = async (id: number) => {
  try {
    const member = await getOneMemberAction(id)

    if (member) {
      const res = await fetch(`http://localhost:3007/team-members/${id}`, {
        cache: "no-cache",
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (!res.ok) {
        throw new Error("Failed to delete member!")
      }

      revalidateTag("team_members")
      const data = await res.json()
      return {
        success: "Success, team member deleted!",
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

export default deleteMemberAction