'use server'

import { revalidateTag } from "next/cache"

const getOneMemberAction = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3007/team-members/${id}`, {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if(!res.ok) {
      throw new Error("Failed to get member!")
    }

    const data = await res.json()
    revalidateTag("team_members")
    return {
      success: "Success, got member!",
      data
    }
  }
  catch(error: any) {
    return {
      errors: error.toString()
    }
  }
}

export default getOneMemberAction