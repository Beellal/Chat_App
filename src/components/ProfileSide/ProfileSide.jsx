import React from "react";
import { Followers } from "../../Data/FollowersData";
import FollowersCard from "../FollowersCard/FollowersCard";
import LogoSearch from "../LogoSearch/LogoSearch";
import ProfileCard from "../ProfileCard/ProfileCard";

const ProfileSide = () =>{
    return(
        <div className="ProfileSide">
            <LogoSearch/>
            <ProfileCard/>
            <FollowersCard/>
        </div>
    )
}

export default ProfileSide