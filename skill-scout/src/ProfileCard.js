import './App.css'
import Tab from './Tab.js'
import { Trophy, Plus } from "@phosphor-icons/react"
import styled from 'styled-components';
import ButtonPopover from './components/ButtonPopover';
import SkillBar from './components/SkillBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    margin: 36px;
    gap: 32px;

    position: relative;
    width: calc(100% - 72px); // Subtract the margin from the total available width
    height: 100%;

    background: white;

    box-shadow: 0px 11px 20px rgba(5, 16, 55, 0.1);
    border-radius: 8px;
`;

const TopProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 24px;

    width: 100%;
    height: 100px;
`;

const PicNameTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 18px;

    width: 100%;
    height: 100px;
`;

const NameTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    max-width: 408px;
    // height: 68px;
`;

const BottomProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;

    width: 100%;
    height: 100%;
`;

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 237px;
    height: 100%;
`;

const InterestTags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    flex-wrap: wrap;

    width: 316px;
`;


function ProfileCard({ id, name, title, profilePic, skills, interests, achievements, availability }) {


    // const availabilityHTML = formatAvailabilityIntoHTML(availability);

    // const [availabilityHTML, setavailabilityHTML] = useState(formatAvailabilityIntoHTML(availability));

    let availabilityString = "";
    let availabilityArray = [];
    for (let i = 0; i < availability.length; i++) {
        const day = availability[i];
        availabilityString += day.day + " " + day.start + "-" + day.end + " " + day.period + " ET";
        availabilityArray.push(availabilityString)
    }

    const availabilityHTML = availability.map(day => (
        <li key={day.day}>
            {day.day} {day.start}-{day.end} {day.period} ET
        </li>
    ));


    //[{name: "", progress: "10%"}]
    let skillsElements = [];
    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        skillsElements.push(
            <SkillBar title={skill.name} width={skill.progress} />
            //TODO set div width and spacing between
            // <div class="skill-bar" style={{width: skill.progress}}>
            //     <p>{skill.name}</p>
            // </div>
        )
    }

    let interestElements = [];
    for (let i = 0; i < interests.length; i++) {
        const interest = interests[i];
        interestElements.push(
            //TODO set div width and spacing between
            <Tab
                deletable={false}
                text={interest}
            />
        )
    }

    let achievementElements = [];
    for (let i = 0; i < achievements.length; i++) {
        const achievement = achievements[i];
        achievementElements.push(
            <div className="trophy">
                <Trophy />
            </div>

        )
    }

    // function formatAvailabilityIntoHTML(availability) {
    //     let availabilityString = "";
    //     let availabilityArray = [];
    //     for (let i = 0; i < availability.length; i++) {
    //         const day = availability[i];
    //         availabilityString += day.day + " " + day.start + "-" + day.end + " " + day.period + " ET";
    //         availabilityArray.push(availabilityString)
    //     }
    //     // const availabilityHTML = availabilityArray.map(text => `<p> ${text} </p>`).join("");

    //     return availability.map(day => (
    //         <li key={day.day}>
    //             {day.day} {day.start}-{day.end} {day.period} ET
    //         </li>
    //     ));
    // }


    return (
        <ProfileCardContainer>
            <TopProfile>
                <PicNameTitle>
                    <img class="profile-pic" src={profilePic} alt="profile" />
                    <Link to={`/profile-page/${id}`}
                        class="profile-card-top-clickable">
                        <NameTitle>
                            <h2 style={{ margin: 0 }}>{name}</h2>
                            <p style={{ margin: 0 }}>{title}</p>
                        </NameTitle>
                    </Link>
                </PicNameTitle>
                <ButtonPopover icon={Plus} text="New request"/>
                <ToastContainer limit={1} />
                {/* <Button type='primary' icon={Plus} text="New request" showPopover /> */}
            </TopProfile>
            <BottomProfile>
                <Skills>
                    <p className='bold'>Top Skills</p>
                    {skillsElements}
                </Skills>
                <div style={{ height: "100%" }}>
                    <p className='bold'>Interests</p>
                    <InterestTags>
                        {interestElements}
                    </InterestTags>
                </div>
                <div>
                    <p className='bold'>Availability</p>
                    <ul>
                        {availabilityHTML}
                    </ul>
                </div>
            </BottomProfile>


        </ProfileCardContainer>
    )
}

export default ProfileCard;
