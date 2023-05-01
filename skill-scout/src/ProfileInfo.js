import React from 'react'
// import profilePic from './img/zohaib.png'

//TODO: use props
export const ProfileInfo = ({name, title, profilePic, availability}) => {


    let availabilityHTML;
    // if (availability) {
    //     const availabilityArray = availability[availability.length - 1].split("ET");
    //     let availabilityHTML = availabilityArray.map((string, index) => (
    //         <li key={index}>
    //             {string}
    //         </li>
    //     ));
    //     availabilityHTML.pop()
    // }

  return (
    <div class='profile-info'>
        <div class='pinfo-picture'>
            <img class='pinfo-profile-pic' src={profilePic} alt="profile picture"></img>
        </div>
        <div class='pinfo-availability'>
            <p class='pinfo-av-title'>Availability</p>
            <ul>
                {availability !== undefined && availabilityHTML}
                {availability === undefined && <li>Monday 1:00 - 2:00 PM ET</li>}
            </ul>
        </div>
        <div class='pinfo-name-title-block'>
            <div class='pinfo-name-text'>
                {name}
            </div>
            <div class='pinfo-title-text'>
                {title}
            </div>
        </div>
    </div>
  )
}
