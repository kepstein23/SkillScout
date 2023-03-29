import React from 'react'
import profilePic from './profilepic.png'

//TODO: use props
export const ProfileInfo = () => {
  return (
    <div class='profile-info'>
        <div class='pinfo-picture'>
            <img class='pinfo-profile-pic' src={profilePic} alt="profile picture"></img>
        </div>
        <div class='pinfo-name-title-block'>
            <div class='pinfo-name-text'>
                Zohaib Corrigan-Scantling
            </div>
            <div class='pinfo-title-text'>
                Frontend Engineer
            </div>
        </div>
    </div>
  )
}
