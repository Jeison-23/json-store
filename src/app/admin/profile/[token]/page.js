import React from "react"
import { ProfileContainer } from "@/containers/ProfileContainer"

const Profile = ({ params }) => {
  return (
    <ProfileContainer token={params.token} />
  )
}

export default Profile