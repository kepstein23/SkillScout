import Header from './Header';
import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { ProfileContact } from './ProfileContact';
import './App.css'
import Tab from './Tab.js'
import {Trophy} from "@phosphor-icons/react"
import styled from 'styled-components';
import SkillBar from './components/SkillBar';

const BioProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: 20px;
    padding-bottom: 10px;
`;

const BottomProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-top: 350px;
    padding-left: 270px;
    flex-wrap: wrap;
    gap: 60px;
`;

const BioText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;
    font-weight: 600;
    width: 237px;
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
gap: 10px;
flex-wrap: wrap;
`;

const PastProjectsContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;

const ProjectContainer = styled.div`
    padding-left: 2.5%;
    margin-top: 10px;
    width: 30%
`;

const AvailabilityContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1px;
`;

const AvailabilityBio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
`;

const InterestProject = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
gap: 32px;
`;

const InterestContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
`


function ProfilePage({name, title, profilePic, skills, interests, achievements}) {

    const bio = "Frontend Engineer with expertise in React, CSS, and HTML. Passionate about creating beautiful and engaging user interfaces. Interested in data analytics, algorithms, and animation"
    const pastProjects = [{name: "Networks & Reputations", description: "In this project, I added bots to an experiment in Emprica. I used Python for data analysis and Javascript for frontend development."}]

    let skillsElements = [];
    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        skillsElements.push(
            <SkillBar title={skill.name} width={skill.progress}/>
            //TODO set div width and spacing between
            // <div class="skill-bar" style={{width: skill.progress}}>
            //     <p>{skill.name}</p>
            // </div>
        )
    }

    let projectElements = [];
    for (let i = 0; i < pastProjects.length; i++) {
        const project = pastProjects[i];
        projectElements.push(
            <ProjectContainer>
                <p className='bold'>{project.name}</p>
                <p>{project.description}</p>
            </ProjectContainer>
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
            <div class="trophy">
                <Trophy/>
            </div>
            
        )
    }

    const availability = 
    [
      {day: "Monday", start: "4:30", end: "6:00", period: "PM"},
      {day: "Friday", start: "5:00", end: "7:30", period: "PM"}
    ]
    let availabilityElements = [];
    for (let i = 0; i < availability.length; i++) {
        let avail = availability[i];
        let str = avail.day + " " + avail.start + " - " + avail.end + " " + avail.period;
        availabilityElements.push(
            <li>{str}</li>
        )
    }

    return(
        <div className="Profile">
            <Header onClick={{}} showHeaderSearchBar={true}/>
            <ProfileInfo name={name} title={title} profilePic={profilePic}>

            </ProfileInfo>

            <ProfileContact name={name}>
                
            </ProfileContact>

            <BottomProfile>
                <AvailabilityBio>
                    <AvailabilityContainer>
                        <p className='bold'>Availability </p>
                        <ul>
                            {availabilityElements}
                        </ul>
                    </AvailabilityContainer>
                    <BioProfile>
                        <BioText>
                        <p className='bold'>Bio</p>
                        <p> {bio} </p>
                        </BioText>
                    </BioProfile>
                </AvailabilityBio>
                
                <Skills>
                    <p className='bold'>Top Skills</p>
                    {skillsElements}
                </Skills>
                <InterestProject>
                    <InterestContainer>
                        <p className='bold'>Interests</p>
                        <InterestTags>
                            {interestElements}
                        </InterestTags>
                    </InterestContainer>
                    <PastProjectsContainer>
                        <p className='bold'>Past Projects</p>
                        {projectElements}
                    </PastProjectsContainer>
                </InterestProject>
                
            </BottomProfile>
            {/* <div class="biography"> 
                <p>Bio</p>
                <p> Frontend Engineer with expertise in React, CSS, and HTML.
                    Passionate about creating beautiful and engaging user interfaces.
                    Interested in data analytics, algorithms, and animation. </p>
            </div> */}
        </div>
    );
}


export default ProfilePage