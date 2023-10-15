import React, {useContext} from "react";
import UserContext from "../context/usercontext";


function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>

  return (
    <div>Profile</div>
  )
}

export default Profile