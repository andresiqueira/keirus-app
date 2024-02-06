'use server'

const getAllMembersAction = async () => {
  try {
    const res = await fetch("http://localhost:3007/team-members/", {
      next: { tags: ['team_members'] },
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if(!res.ok) {
      throw new Error("Failed to get all members!")
    }

    const data = await res.json()
    return {
      success: "Success, get all members!",
      data
    }
  }
  catch(error: any) {
    return {
      errors: error.toString()
    }
  }
}

export default getAllMembersAction;