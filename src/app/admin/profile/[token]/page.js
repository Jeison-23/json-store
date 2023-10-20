import React from "react"
import { ProfileContainer } from "@/containers/ProfileContainer"

const Profile = ({ params }) => {
  return (
    <ProfileContainer isAdmin token={params.token} />
  )
}

export default Profile