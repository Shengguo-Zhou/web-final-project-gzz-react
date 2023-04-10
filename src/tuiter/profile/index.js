import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import ProfileItem from "./profile-item";

const ProfileComponent = () => {
  const profileInfo = useSelector(state => state.profile)
  return(
      <ProfileItem profile={profileInfo}/>
  );
};
export default ProfileComponent;