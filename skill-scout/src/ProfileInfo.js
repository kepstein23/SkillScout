import React from 'react'
import styled from 'styled-components';
// import profilePic from './img/zohaib.png'

const BioText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    font-weight: 600;
    width: 400px;
`;

//TODO: use props
export const ProfileInfo = ({name, title, profilePic, availability, bio}) => {


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
    let availabilityElements = [];
    for (let i = 0; i < availability.length; i++) {
        const avail = availability[i];
        const str = avail.day + " " + avail.start + " - " + avail.end + " " + avail.period
        availabilityElements.push(
            <li>
                {str}
            </li>
        )
    }
  return (
    <div>
        <div className='profile-info' style={{ paddingBottom: "1rem" }}>
            <div class='pinfo-picture'>
                <img class='pinfo-profile-pic' src={profilePic} alt="profile picture"></img>
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

        <div className='avail-bio'>
            <div class='pinfo-bio'>
                <BioText>
                    <p className='bold'>Bio</p>
                    <p> {bio} </p>
                </BioText>
            </div>
            <div class='pinfo-availability'>
                <p class='pinfo-av-title'>Availability</p>
                <ul>
                    {availabilityElements}
                </ul>
            </div>

        </div>
    </div>
  )
}
