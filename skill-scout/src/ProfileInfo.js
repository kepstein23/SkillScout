import React from 'react'
import profilePic from './img/zohaib.png'

//TODO: use props
export const ProfileInfo = () => {
  return (
    <div class='profile-info'>
        <div class='pinfo-picture'>
            <img class='pinfo-profile-pic' src={profilePic} alt="profile picture"></img>
        </div>
        <div class='pinfo-availability'>
            <p class='pinfo-av-title'>Availability</p>
            <ul>
                <li>Mon 12-3pm ET</li>
                <li>Tue 2:30-4pm ET</li>
                <li>Wen 12-3pm ET</li>
                <li>Fri 1-2pm ET</li>
            </ul>
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
