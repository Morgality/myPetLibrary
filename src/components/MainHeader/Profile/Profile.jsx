import React from "react";
import "./Profile.scss"
import profile from "../../../../public/img/Logos/MainButtons/Profile.svg";
import { Link } from "react-router-dom";

export const Profile = () => {
    return (
    <Link to="/profile/1">
      <img src={profile} 
      style={{
        width: '53px',
        height: '54px',
        cursor: 'pointer'
      }} 
      alt="" />
    </Link>
    )
}